// const nums = [1, 2, 3, 4, 5];

// const squares = nums.map(function (num) {
//   return num * num;
// });

// console.log(squares);

// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here
// const Capitalized = names.map(function(name){
//     return name.charAt(0).toUpperCase()
// })

// console.log(Capitalized)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const master = pokemon.map((type) =>`<p>${type}</p>`)

console.log(master)