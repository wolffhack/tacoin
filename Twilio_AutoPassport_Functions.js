// This code, sends a mail every time the autopassport is been updated.
// Arguments can be provided when a request is initated on-chain and used in the request source code as shown below
const AUTOPASSPORT_CLIENT_EMAIL = args[1]
const VERIFIED_AUTOPASSPORT_SENDER = args[2]
const SENDGRID_API_KEY = args[3]

// const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

// Use Twilio Sendgrid API to send emails.
// https://sendgrid.com/solutions/email-api
// async function sendEmail() {
//   if (SENDGRID_API_KEY) {
//     const sgMail = require("@sendgrid/mail")
//     sgMail.setApiKey(SENDGRID_API_KEY)
//     const msg = {
//       to: AUTOPASSPORT_CLIENT_EMAIL, // Change to your recipient
//       from: VERIFIED_AUTOPASSPORT_SENDER, // Change to your verified sender
//       subject: `${clientVIN}Your autopassport have been created`,
//       text: "Your car is an open book",
//       html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//     }
//     sgMail
//       .send(msg)
//       .then(() => {
//         console.log("Email sent")
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }

//   const soundchartsResponse = await Functions.makeHttpRequest({
//     url: URL,
//     // Get a free sandbox API key from https://doc.api.soundcharts.com/api/v2/doc
//     headers: { "x-app-id": secrets.soundchartAppId, "x-api-key": secrets.soundchartApiKey },
//   })

//   // Handle API error.
//   if (soundchartsResponse.error) {
//     const returnedErr = soundchartsResponse.response.data
//     let apiErr = new Error(`API returned one or more errors: ${JSON.stringify(returnedErr)}`)
//     apiErr.returnedErr = returnedErr
//     throw apiErr
//   }
// }
// sendEmail()

async function sendEmail() {
  // if (!SENDGRID_API_KEY) {
  //   return
  // }
  if (SENDGRID_API_KEY){
    console.log(SENDGRID_API_KEY)
  }

  const sendgridURL = "https://api.sendgrid.com/v3/mail/send"
  // Use the verified sender email address
  const authHeader = "Bearer " + SENDGRID_API_KEY

  if (!VERIFIED_AUTOPASSPORT_SENDER ) throw new Error("VERIFIED_SENDER constant not set")

  // Structure for POSTING email data to Sendgrid.
  // Reference: https://docs.sendgrid.com/api-reference/mail-send/mail-send
  const emailData = {
    personalizations: [
      {
        to: [
          {
            email: AUTOPASSPORT_CLIENT_EMAIL,
            name: "Mario",
          },
        ],
        subject: "A Car has been created!",
      },
    ],
    content: [
      {
        type: "text/plain",
        value: `Hey Mario! You've got created a car!
                Best,
                Autopassport
            `,
      },
    ],
    from: {
      email: VERIFIED_AUTOPASSPORT_SENDER,
      name: "Mario",
    },
    reply_to: {
      email: "sam.smith+noreply@example.com",
      name: "Sam Smith",
    },
  }

  // Build the config object to pass to makeHttpRequest().
  const functionsReqData = {
    url: sendgridURL,
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authHeader },
    data: emailData,
  }

  let sendgridResponse
  try {
    console.log("\nSending email...")
    sendgridResponse = await Functions.makeHttpRequest(functionsReqData)
    console.log(sendgridResponse)

    if (sendgridResponse.error) {
      throw new Error("Sendgrid API responded with error: " + JSON.stringify(sendgridResponse.response.data.errors[0]))
    }
  } catch (error) {
    console.log("\nFailed when sending email.")
    throw error
  }

  console.log("\nSent email...")
}

