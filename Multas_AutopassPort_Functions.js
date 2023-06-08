async function getFinesData() {

    const endpointFines ="localhost:5000/cars/fines/vin";
  
    try {
      const reqFines = Functions.makeHttpRequest({
        url : endpointFines,
        method: "GET",
      })
  
      const dataResponse = await reqFines;
  
    //   const { Message, Results } = dataResponse
  
      if (Message !== "Results returned successfully") {
        return Functions.encodeString(JSON.stringify({ error: Message }))
      }
  
      if (Results.length === 0) {
        return Functions.encodeString(JSON.stringify({ error: "No data found" }))
      }
  
    //   const firstElement = Results[0]
    //   const FinesData = {
    //             //AQUI QUE PONGO
    //   }
      return Functions.encodeString(JSON.stringify(dataResponse ))
    }
    catch (error) {
      return Functions.encodeString(JSON.stringify({ error: "Error fetching data" }))
    }
  }