// Grabbing files
const container =document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count =document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');
let ticketPrice = +movieSelect.value;

//Functions
function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeats].map((seat)=>[...seats].indexOf(seat))
  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))  
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Add Event Listeners
//Seat click event
container.addEventListener('click', (e)=>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
    updateSelectedCount();
  }
} )

//movie select event
movieSelect.addEventListener('change', (e)=>{
  ticketPrice = +e.target.value;
  updateSelectedCount();
})