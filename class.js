const Products = [
    {
      brand: "Apple",
      model: "iPhone 13",
      displaySize: 6.1,
      storage: 128,
      color: "Midnight Green"
    },
    {
      brand: "Samsung",
      model: "Galaxy S21",
      displaySize: 6.2,
      storage: 256,
      color: "Phantom Black"
    },
    {
      brand: "Google",
      model: "Pixel 6",
      displaySize: 6.4,
      storage: 128,
      color: "Sorta Sage"
    },
    {
      brand: "OnePlus",
      model: "9 Pro",
      displaySize: 6.7,
      storage: 256,
      color: "Morning Mist"
    },
    {
      brand: "Xiaomi",
      model: "Mi 11",
      displaySize: 6.81,
      storage: 128,
      color: "Cosmic Black"
    }
  ];

//   similar
// has some properties, method
// class Product{
//     country = 'Bangladesh'
//     speak(talk){
//         console.log(`Talking about ${talk}`);
//     }
// }

// const xaomi = new Product();
// console.log(xaomi);
// xaomi.speak('this phone')


class Teacher{
    constructor(name, age, subject){
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
}
const rakib = new Teacher('Md. Rakibul', 21, 'Physics')
const shanto = new Teacher('Md. Shanto', 23, 'Mathmatics')
const antor = new Teacher('Md. Antor', 24, 'Chemistry');
console.log([rakib, shanto, antor]);
