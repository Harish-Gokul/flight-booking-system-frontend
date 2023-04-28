let flightsContainer = document.querySelector(".displayFligtsContainer")
let seatsContainer = document.getElementById("seatsContainer")
let displayTotalAmountForSelectedSeates = document.getElementById("toalAmountForSelectedSeats") 
let triggerMyBookingBtn = document.getElementById("triggerMyBookingBtn")
let welcomeGreatingsDisp  = document.getElementById("welcomeGreatings")
//model popup
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
 
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
