/* Given Code, don't edit */
//
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string) {
  let time = parseInt(string);
  let greeting = "";
  if (time <= 12) {
    greeting = "Good Morning"
  } else if (time >= 12 && time <= 17) {
    greeting = "Good Afternoon";
  } else if (time > 17) {
    greeting = "Good Evening";
  }
  return greeting;
};

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
};
