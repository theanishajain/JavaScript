//DATES
let myDate = new Date();
console.log(myDate);//gonna return weird value
//console.log(myDate.toString());
//console.log(myDate.toDateString());
// console.log(typeof myDate); //gonna return object
 
// let myCreatedDate = new Date(2023,0, 23);
// let myCreatedDate = new Date(2023,0, 23, 5 ,3);


// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// Control + Space button show the properties

