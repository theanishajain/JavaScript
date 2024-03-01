//var doesn't follow the rules of block scope
if(true){
    let a = 10;
    const b = 3;
    var c = 4;
}  
// console.log(a);  //will not work
// console.log(b);  //will not work as they are defined inside the if block
console.log(c);


// ******Nested Scope ****
function one(){
    const username = " Anisha";
    function two(){
        const website = "Youtube";
        console.log(username);//possible
    }
    // console.log(website); not possible
}

// ********
console.log(addOne(1));
function addOne(num){
return num+1;
}


//console.log(addTwo(3));//not possible
const addTwo = function(num2){//aslo known as an expression
    return num2+2;
}