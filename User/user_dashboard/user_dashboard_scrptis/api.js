async function getAllFlights(){
try{
    let response = await fetch("http://localhost:3000/flights/allFlights");
    if(response.status != 200){
         alert("Connection Error")
         return
    }
    let jsonData = await response.json();
    return jsonData
}
catch(ex){
    alert("Error occurred while connecting to server...  "+ex)
}

}

async function getFlight(id){
    let response = await fetch(`http://localhost:3000/flights/${id}`)
    if(response.status != 200){
        alert("Could not fetch Flight object")
        return
   }
   let jsonData = await response.json();
   return jsonData
}


async function bookTickets(userId,flightId,seats,token){
    let bodyContent = JSON.stringify({flightId:flightId,seats:seats})
    let response = await fetch(`http://localhost:3000/users/bookTicket/${userId}`,{
        method : "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-auth-user-token" : token
          },
          body: bodyContent
    })
    const jsonData = await response.json();
    
    if(response.status==200){

        localStorage.setItem("user",JSON.stringify(jsonData[0]))
        return true
    }else{
        alert(jsonData.message)
        return false
    }
}

async function getBookedTickets(id){
    let response = await fetch(`http://localhost:3000/users/${id}`)
    const jsonData = await response.json();
    if(response.status==200)
        return jsonData
    alert(jsonData.message);
    return false;

}