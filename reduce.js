const numbers = [5, 10, 15, 20, 25];

const allSum = numbers.reduce((p, c) => p + c, 0);
console.log(allSum);

const personInfo = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Writer" }
  ];

//   for Map
  const names = personInfo.map(inFo => inFo.name);
  console.log(names);
  const ages = personInfo.map(agePerson => agePerson.age)
  console.log(ages);

//   forEach 
personInfo.forEach(p => console.log(p.occupation));

// filter
const higestAges = personInfo.filter(personAge => personAge.age > 25);
console.log(higestAges);
// find
const findAges = personInfo.find(personAge => personAge.age > 25);
console.log(findAges);
// reduce
const totalAge = personInfo.reduce((accum, current) => accum + current.age, 0);
console.log(totalAge);
