// Question 2
console.log("number1 = ", number1);
var number1 = 3;
let number2 = 2.9;
const number3 = 0xff;

let firstName = "Ahmed";
let middleName = 'Mohamed';
let lastName = `Elshaar`;

let numbers = [1,10,3,25,9];


let flag = true;

console.log("This is the External JavaScriptfile");

// Question 3
firstName[3]='A';
console.log("first name = ", firstName);

// number1 = 5;
// number2 = 15;
// number3 = 25;

console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
console.log(typeof firstName);
console.log(typeof middleName);
console.log(typeof lastName);
console.log(typeof numbers);
console.log(typeof flag);


// Question 4
console.log(number1 +  number2);
console.log(number1 +  numbers);
console.log(number2 + flag);
console.log(firstName + flag);
console.log(number1 + firstName);
console.log(number1 * flag);
console.log(number1 / lastName);
console.log(`${firstName} ${middleName} ${lastName}`);


// Display Numbers array but each number should be multiplied by 5 
numbers.forEach(number => {
  if(number % 5 == 0){
    console.log(number);
  }
})

// Then display only values that greater than 20 from resulted array
numbers.forEach(number => {
  if(number > 20){
    console.log(number);
  }
})
