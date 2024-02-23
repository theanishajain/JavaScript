// objects can be created in two ways
//singleton: object.create
//object literals
let mySymb = Symbol("Key1");
const jsUser = {
    name: "Anisha",
    //mySymb : "keyPair" not being used as symbol will print the right value but the typeOf value will be wrong{sting will be the type}
    age : 18,
    location: "Pune",
    email : "anisha@google.com",
    [mySymb] :  "myKey",
    loggedIn : "false",
    lastLoggedIn: ["Monday", "Thursday"],
    "Full name": "Anisha Jain",//*****keep in my mind */
    0: 33
    //I was facing an issue while trying to put the symbol key in the last
   
}
console.log(jsUser.email);//one of ways to print an object
console.log(jsUser["email"]);
console.log(jsUser["Full name"]);
console.log(jsUser[0]);
console.log(jsUser[mySymb]);


// ****We can also freeze the object by using freeze method then there will be no changes in our objects
// Object.freeze(jsUser);



jsUser.greeting = function(){
    console.log(`hello , ${this.name}`);
}
console.log(jsUser.greeting());