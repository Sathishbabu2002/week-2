/* 
Write the greet() function
- Pass in the name parameter and return a string with the name argument.
- for ex. functionName(parameter){...}
*/
function greet(Dani) {
    //your code goes down here
    let name = Dani;
    return 'hello'+" "+name;
  }
  
  //open the browser console to check results
  console.log('results: ', greet('Dani'));
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = greet;
  }
  