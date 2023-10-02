// Create animal objects
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

// Add astronautID property to each object
superChimpOne.astronautID = "CHAD001";
salamander.astronautID = "LACEY002";

// Create an array to hold the animal objects
let animalArray = [superChimpOne, salamander];

// Print out relevant information about each animal
animalArray.forEach(animal => {
   console.log(`Name: ${animal.name}`);
   console.log(`Species: ${animal.species}`);
   console.log(`Mass: ${animal.mass} kg`);
   console.log(`Age: ${animal.age} years`);
   console.log(`Astronaut ID: ${animal.astronautID}`);
   console.log("------------");
});

// Start an animal race!
console.log("The animal race is about to begin!");
