/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr){
    /* It would be a good idea to make sure hour isn't less than 0 or greater
   * than 24...perhaps "throwing an Error" if one of these impossible cases
   * happens.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Throwing_a_generic_error
   *
   */
  //   My Solution:
  // const time = parseInt(timeStr);

  //   if (time < 12 ){
  //   console.log('Good Morning')
  //   return "Good Morning"
  //   } else if (time > 17){
  //     console.log('Good Evening')
  //     return "Good Evening"
  //   } else {
  //     console.log('Good Afternoon')
  //      return "Good Afternoon"
  //   }

    // Other Solution:
    const hour = parseInt(timeStr, 10);
    if ( hour < 12) return "Good Morning"
    if ( hour > 17) return "Good Evening"
    return "Good Afternoon"

}
/* Write your implementation of displayMessage() */
function displayMessage(greetType){
 document.getElementById('greeting').innerText = greetType
}