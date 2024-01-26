let name;//undefined
const id = Symbol('344');
const anotherId = Symbol('344');
console.log(id == anotherId);//false
//Reference**(non-primitive) Data types
//Array , Objects , Functions
const arr = ["anisha","amisha", "amika"];
let obj1 = {
    name: "Anisha",
    age : 3

}
const myFunc = function(){
    console.log("Hello");
}
console.log(typeof obj1);

//++++++++++++++++Stack(Primitive)  , Heap(Non-Primitive)
//Stack -- copy
//heap --reference