const fs = require("fs")

// Loads environment variables from .env.enc file (if it exists)
require("@chainlink/env-enc").config()

const Location = {
  Inline: 0,
  Remote: 1,
}

const CodeLanguage = {
  JavaScript: 0,
}

const ReturnType = {
  uint: "uint256",
  uint256: "uint256",
  int: "int256",
  int256: "int256",
  string: "string",
  bytes: "Buffer",
  Buffer: "Buffer",
}

// Configure the request by setting the fields below
const requestConfig = {
  // Location of source code (only Inline is currently supported)
  codeLocation: Location.Inline,
  // Code language (only JavaScript is currently supported)
  codeLanguage: CodeLanguage.JavaScript,
  // String containing the source code to be executed
  source: fs.readFileSync("./USA_Manufacturers_Functions.js").toString(),
  // source: fs.readFileSync("./Google_Maps_Mileage.js").toString(),
  //source: fs.readFileSync('./API-request-example.js').toString(),
  // Secrets can be accessed within the source code with `secrets.varName` (ie: secrets.apiKey). The secrets object can only contain string values.
  //secrets: { apiKey: process.env.COINMARKETCAP_API_KEY ?? "" },
  // Per-node secrets objects assigned to each DON member. When using per-node secrets, nodes can only use secrets which they have been assigned.
  perNodeSecrets: [
    {
      // sendGridApiKey: process.env.SENDGRID_API_KEY,
      // googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
    {
      // sendGridApiKey: process.env.SENDGRID_API_KEY,
      // googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
    {
      // sendGridApiKey: process.env.SENDGRID_API_KEY,
      // googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
    {
      // sendGridApiKey: process.env.SENDGRID_API_KEY,
      // googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
    {
      // sendGridApiKey: process.env.SENDGRID_API_KEY,
      // googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
  ],
  // ETH wallet key used to sign secrets so they cannot be accessed by a 3rd party
  walletPrivateKey: process.env["PRIVATE_KEY"],
  // Args (string only array) can be accessed within the source code with `args[index]` (ie: args[0]).
  args: [
    ""
    // [], 
    // process.env.AUTOPASSPORT_CLIENT_EMAIL,
    //  process.env.VERIFIED_AUTOPASSPORT_SENDER
    // , process.env.SENDGRID_API_KEY
    // "distance", "duration", "duration_in_traffic"
  ],
  // Expected type of the returned value
  expectedReturnType: ReturnType.string,
  // Redundant URLs which point to encrypted off-chain secrets
  secretsURLs: [],
}

module.exports = requestConfig


