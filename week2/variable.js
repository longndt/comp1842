/*
  How to run JS code ?
  - Install Code Runner extension
  - Right click on code then select "Run Code"
*/

//declare variable
//1) use "var" : global scope
var x = 10
var y = 20
var z = x + y
console.log(z)

//2) use "let" : local scope
let a = 3
let b = 5
let c = a * b
console.log(c)

//3) use "$" symbol
$fpt = "FPT Greenwich"
console.log($fpt)

//4) no need to use any symbol, only variable name itself
year = 2024  //number: no quote
city = "Ha Noi" //text: must include quote
console.log("We come from " + city + " . We are living in " + year)
