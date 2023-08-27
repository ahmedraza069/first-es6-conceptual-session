// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 21,
//     isStudent: false,
//     address: {
//       street: "123 Main Street",
//       city: "Anytown",
//       country: "USA"
//     },
//     hobbies: ["reading", "cooking", "hiking"]
//   };
//   console.log(person.age);
//   console.log(person['age']);

//   const propertyValue = 'age';
//   console.log(person[propertyValue]);

const book = {
    title: "The Great Gatsby",
    author: {
      name: "F. Scott Fitzgerald",
      birthYear: 1896,
      deathYear: 1940
    },
    publication: { 
      year: 1925,
      publisher: "Charles Scribner's Sons",
      genre: ["Fiction", "Classic", "Drama"]
    }
    
  };
  console.log('Title:', book.title);
  console.log('Name:', book.author.name);
  console.log('Series:', book.publication.genre[book.publication.genre.length-1]);