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


superChimpOne.astronautID = "CHAD001";
salamander.astronautID = "LACEY002";


let animalArray = [superChimpOne, salamander];


animalArray.forEach(animal => {
   console.log(`Name: ${animal.name}`);
   console.log(`Species: ${animal.species}`);
   console.log(`Mass: ${animal.mass} kg`);
   console.log(`Age: ${animal.age} years`);
   console.log(`Astronaut ID: ${animal.astronautID}`);
   console.log("------------");
});


console.log("The animal race is about to begin!");