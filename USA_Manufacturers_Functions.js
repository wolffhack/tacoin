// async function Manufacturer() {
//   const apiManufacturers="https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json";
//   const urlManufacturersUSA = Functions.makeHttpRequest({
//     url : apiManufacturers,
//     method: "GET",
//   })
  
//   const ApiResponse = await urlManufacturersUSA;

//   if (ApiResponse.error) {
//     throw Error("Request failed")
//   }

//   const primerodelArray = ApiResponse.data[0]
//   console.log(primerodelArray)
  
//   const ManufactData = {
//     id: primerodelArray.Mfr_ID,
//     cname: primerodelArray.Mfr_CommonName,
//     country: primerodelArray.Country,
//   }

//   return Functions.encodeString(JSON.stringify(ManufactData))
   
// }

async function getManufacturerData() {

    const endpointManufacturer ="https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json";
  
    try {
      const reqManufacturersUSA = Functions.makeHttpRequest({
        url : endpointManufacturer,
        method: "GET",
      })
  
      const dataResponse = await reqManufacturersUSA;
  
      const { Message, Results } = dataResponse
  
      if (Message !== "Results returned successfully") {
        return Functions.encodeString(JSON.stringify({ error: Message }))
      }
  
      if (Results.length === 0) {
        return Functions.encodeString(JSON.stringify({ error: "No data found" }))
      }
  
      const firstElement = Results[0]
      const ManufactData = {
        id: firstElement.Mfr_ID,
        cname: firstElement.Mfr_CommonName,
        country: firstElement.Country,
      }
      return Functions.encodeString(JSON.stringify(ManufactData))
    }
    catch (error) {
      return Functions.encodeString(JSON.stringify({ error: "Error fetching data" }))
    }
  }