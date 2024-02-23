const tinderUser = new Object()
console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.name = "Moon";
console.log(tinderUser);
const obj1 = {0:"a", 2: "b"};
const obj2 = {1: "c ", 4: "d"};
// const obj3 = {obj1 , obj2};
// console.log(obj3);
// const obj4 = obj1.concat(obj2); throwing error
// console.log(obj4);
const obj3 = Object.assign({}, obj1,obj2)//using parenthesis is a good practice for assured answer
console.log(obj3);

//////*****Why not to use spread method like arrays to spread everthing  */
const obj5 = { ...obj1, ...obj2};
console.log(obj5);


// ***** INTEResting thing ****
console.log(Object.keys(tinderUser));//will return an array
console.log(Object.values(tinderUser));//will also return an array


