/*Instructions
 - Greet your friend by printing a message to the console.
*/
//your code here
var myfriend = "sundar"
///////////////
function greetings() {
  //also your code here
  ///////////////
  let result = "greetings" + "  "+myfriend+" ";
  return result;
}

//leave this line unchanged to console log the results
console.log('results: ', greetings());

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings;
}
