const myObject = [{
    name: "John",
    age: 30,
    hobbies: ["reading", "swimming", "hiking"],
    favoriteNumbers: [7, 15, 22],
    isStudent: false
  }];

  console.log(myObject[0].favoriteNumbers[1]);
  
  const person = {
    name: "Alice",
    age: 28,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "Someland"
    },
    hobbies: ["painting", "reading"],
    isStudent: false
  };
  console.log(person.address?.street);
