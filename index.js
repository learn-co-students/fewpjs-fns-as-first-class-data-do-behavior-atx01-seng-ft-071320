/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/



function greet(arg){
  const parsed = parseInt(arg)
    if (parsed < 12) {
      return "Good Morning"
    } else if (parsed > 17) {
      return "Good Evening"
    } else {
      return "Good Afternoon"
    }
}

function displayMessage(arg) {
  const greet = document.getElementById('greeting');
  greet.innerText = arg;
  
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
