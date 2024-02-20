//when we do 
const num = 6;
console.log(typeof num);
//we know we will get the number as a type of num
//But there is a way to explicitly define a variable as a number
const balance = new Number(100);
console.log(balance);
//changing the typeOf of balance
console.log(balance.toString().length);
console.log(typeof balance);//returns object

let arr = [1,3,5,5];
console.log(typeof arr);//returns object

console.log(balance.toFixed(3));//returns the value like 100.000

//MORE PROPERTIES ON NUMBER
const otherNumber = 553.7968//will return 554
console.log(otherNumber.toPrecision(3)); // KEY point : returns a string not a number
const oneMoreNumberExperiment = 11194.85;
console.log(oneMoreNumberExperiment.toPrecision(3));//will return something weird so use it cautiously

//if it's hard to read the zeroes in a number then use toLocaleString method
const hundred = 10000000;
console.log(hundred.toLocaleString('en-In'));



// ***********Maths Library comes with js by DEFAULT *******************
console.log(Math);//will return object
console.log(Math.abs(-3))//will return absolute value so this value will be convert to positive but not vice versa
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(33, 55, 88));
console.log(Math.max(5,6,7));

//Most Important
console.log(Math.random());//always returns value between 0 and 1
console.log((Math.randem()*10)+1);
console.log(Maht.floor(Math.random()*10)+1);
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);