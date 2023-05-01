

function renderFlightsJson(arrayOfFlights){
    flightsContainer.innerHTML = ` `;
    arrayOfFlights.forEach((eachFlight)=>{
        
       let div = buildEachFlightHtml(eachFlight._id,eachFlight.from,eachFlight.to,eachFlight.departureDateAndTime,eachFlight.pricePerSeat,eachFlight.name,eachFlight.number,getSeatCount(eachFlight.seats))
       flightsContainer.appendChild(div)
    })

}

function renderSeatsJson(arrayOfSeats){
    seatsContainer.innerHTML = ` `;
    
    arrayOfSeats.forEach((eachSeat)=>{
        let seatSpan = buildSeatsHtml(eachSeat)
        seatsContainer.appendChild(seatSpan)
    })

}

function renderBookedTicketsJSON(ticketsArray){
    flightsContainer.innerHTML = ` `;
    for(let i =0;i<ticketsArray.length;i++){
        let eachObj = ticketsArray[i];
        if(eachObj.flightId == null) continue;
        // seatsBooked,from,to,depature,price,name,number,totalPrice
      let div=  buildBookedTicketsCards( getSeatsStringFromSeatsCollection(eachObj.seats),eachObj.flightId.from,eachObj.flightId.to,eachObj.flightId.departureDateAndTime,eachObj.flightId.pricePerSeat,eachObj.flightId.name,eachObj.flightId.number,eachObj.seats.length * eachObj.flightId.pricePerSeat)
      console.log(div)
      flightsContainer.innerHTML += div
    }
}


function buildEachFlightHtml(id,from,to,depature,price,name,number,availableSeats){

    let parentFlightDiv = document.createElement("div")
    parentFlightDiv.id = id;
    parentFlightDiv.className = "flight";

    let seatsAvailable = document.createElement("h5")
    seatsAvailable.innerText = `Seats Available - ${availableSeats}`

    parentFlightDiv.appendChild(seatsAvailable)
    let hrTag = document.createElement("hr")
    parentFlightDiv.appendChild(hrTag)

    let flightContent = document.createElement("div")
    flightContent.className = "flightContent";
       
        let leftDiv = document.createElement("div")
        let fromH6 = document.createElement("h6")
        fromH6.innerText = `From - ${from}`
        leftDiv.appendChild(fromH6);
        let toH6 = document.createElement("h6")
        toH6.innerText = `To - ${to}`
        leftDiv.appendChild(toH6)
        let depatureDateAndTime = document.createElement("h6")
        console.log(depature)
        depatureDateAndTime.innerText = `Depature Time - ${new Date(depature).toString()}`
        leftDiv.appendChild(depatureDateAndTime)

    flightContent.appendChild(leftDiv)


        let rightDiv = document.createElement("div")
        let priceH6 = document.createElement("h6")
        priceH6.innerText = `Price - ₹${price}`
        rightDiv.appendChild(priceH6)
        let flightNumberH6 = document.createElement("h6")
        flightNumberH6.innerText = `Flight Number - ${number}`
        rightDiv.appendChild(flightNumberH6)
        let flightNameH6 = document.createElement("h6")
        flightNameH6.innerText = `Flight Name - ${name}`
        rightDiv.appendChild(flightNameH6)
    flightContent.appendChild(rightDiv)
    parentFlightDiv.appendChild(flightContent)
    let hrTag2 = document.createElement("hr")
    parentFlightDiv.appendChild(hrTag2)

    let bookTicketBtn = document.createElement("button")
    bookTicketBtn.className = "btn btn-success"
    bookTicketBtn.innerText = "Book Tickets"
    let attributeBookTickets = document.createAttribute("onclick")
    attributeBookTickets.value=`bookTicketsBtn(this)`;
    bookTicketBtn.setAttributeNode(attributeBookTickets)

    parentFlightDiv.appendChild(bookTicketBtn)

    return parentFlightDiv
}

function buildBookedTicketsCards(seatsBooked,from,to,depature,price,name,number,totalPrice){
    let template =`
    <div class="flight" >
       
    <h5 >Booked Tickets - <b> ${seatsBooked} </b></h5>
    <hr>
  <div class="flightContent">
      
    <div>
        <h6> From - ${from}</h6>
        <h6> To - ${to}</h6>
        <h6> Depature Time - ${Date(depature)}</h6>
    </div>

    <div>
        <h6> Price - ${price}</h6>
        <h6> Flight Number - ${number}</h6>
        <h6> Flight Name - ${name}</h6>
    </div>
  </div>
  <hr>
  <h5>Total Price - <b>  ${totalPrice} </b></h5>


 
</div> 
`
return template;
}



function buildSeatsHtml(seat){
    let eachSeat = document.createElement("span")
    eachSeat.innerText = seat.seatId
    if(seat.isAvailable == false){
        eachSeat.className = "eachSeatDisabled"
        return eachSeat;
    }
    eachSeat.className = "eachSeat"
    eachSeat.id = seat.seatId;

    let eachSeatAttribute = document.createAttribute("onclick")
    eachSeatAttribute.value=`selectSeats(this)`;
    eachSeat.setAttributeNode(eachSeatAttribute)
    return eachSeat
}