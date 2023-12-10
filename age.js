var prompt = require('prompt-sync')();


age = parseInt(prompt("Enter your AGE: " ));
year = parseInt(prompt("Enter a year: " ));


function bmi(){
 cal = year - age

console.log(cal);
console.log("You was born in " + year)
/* This prgram may be a year off 
*/

}

bmi();
