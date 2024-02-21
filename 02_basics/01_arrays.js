//splice: changes the original array
//slice : doesn't change the original array


// ******* push and concat(returns new array so we have to save it another vairable to console it) difference *****
const marvelHeroes = [ "thor", "Ironman" , "spiderMan" ];
const dcHeroes = ["superMan" , "Flash", "batMan"];
marvelHeroes.push(dcHeroes)
console.log(marvelHeroes);//will return arrays inside array
const newHeroes = marvelHeroes.concat(dcHeroes);
// console.log(marvelHeroes); will retuen the same output
// console.log(newHeroes); not working in my lappy

// ******** SPREAD OPERATOR **********


const all_new_heroes = [...marvelHeroes, ...dcHeroes];
console.log(all_new_heroes);  //Giving the different answer

// Flat

console.log(Array.isArray("Anisha"));
console.log(Array.from("Anisha"));//will return an array with separated characters
 
let score_1 = 44;
let score_2 = 55;
let score_3 = 66;
console.log(Array.of(score_1,score_2, score_3));
