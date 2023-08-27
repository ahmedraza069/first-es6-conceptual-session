const person = {
    firstName: "John",
    lastName: "Doe",
    isStudent: false,
    address: {
      street: "123 Main Street",
      city: "Anytown",
      country: "USA"
    },
    hobbies: ["reading", "cooking", "hiking"]
  };
  const person2 = {...person};

  person2.age = 30;

  console.log(person);
  console.log(person2);
  