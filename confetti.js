import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function makeConfetti(){
  confetti();
 
}



// Add event listener for button click
document.getElementById('acceptButton').addEventListener('click', makeConfetti);
