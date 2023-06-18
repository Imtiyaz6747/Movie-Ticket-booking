// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the necessary elements
  var movieSelect = document.getElementById("movie");
  var citySelect = document.getElementById("city");
  var dateSelect = document.getElementById("date");
  var timeSelect = document.getElementById("time");
  var seatContainer = document.querySelectorAll(".seat");
  var countDisplay = document.getElementById("count");
  var totalDisplay = document.getElementById("total");
  var bookButton = document.getElementById("button");
  var confirmationMsg = document.getElementById("confirmation-msg");
  const container = document.querySelector('.container');

  var selectedSeats = [];
  var ticketPrice = 0;

  // Function to update the selected seat count and total price
  function updateSelectedCount() {
    // Get the selected seats
    var selectedSeats = document.querySelectorAll(".row .seat.selected");

    // Update the count and total price
    var selectedSeatCount = selectedSeats.length;
    countDisplay.textContent = selectedSeatCount;
    totalDisplay.textContent = selectedSeatCount * ticketPrice;
  }

  // Event listener for movie select
  movieSelect.addEventListener("change", function () {
    ticketPrice = parseInt(movieSelect.value);
    updateSelectedCount();
  });

  // Event listener for seat selection
  seatContainer.forEach(function (seat) {
    seat.addEventListener("click", function () {
      // Toggle the seat selection
      seat.classList.toggle("selected");

      // Update the selected seat count and total price
      updateSelectedCount();
    });
  });

  // Event listener for book button click
  bookButton.addEventListener("click", function () {
    var selectedSeatCount = document.querySelectorAll(".row .seat.selected").length;
    var selectedMovie = document.querySelector("#movie option:checked").textContent;
    var selectedDate = document.querySelector("#date option:checked").textContent;
    var selectedTime = document.querySelector("#time option:checked").textContent;
    var selectedLocation = document.querySelector("#city option:checked").textContent;

    if (selectedMovie === "-Select Movie-") {
      confirmationMsg.textContent = "Please select a movie.";
    } else if (selectedLocation === "-Select City-") {
      confirmationMsg.textContent = "Please select a city.";
    } else if (selectedDate === "-Select day-") {
      confirmationMsg.textContent = "Please select a date.";
    } else if (selectedTime === "-Select Time-") {
      confirmationMsg.textContent = "Please select a time.";
    } else if (selectedSeatCount === 0) {
      confirmationMsg.textContent = "Please select at least one seat.";
    } else {
      confirmationMsg.innerHTML = "<em>Tickets confirmed! Enjoy the show.</em> <br><br>" +
        "Number of seats selected: " + selectedSeatCount + "<br><br>" +
        "Selected movie: " + selectedMovie + "<br><br>" +
        "Movie: " + selectedDate + "<br><br>" +
        "Show time: " + selectedTime + "<br><br>" +
        "Selected location: " + selectedLocation;

      // Redirect to the next page
      // window.location.href = 'next-page.html'; // Replace 'next-page.html' with the desired URL
    }
  });
});
