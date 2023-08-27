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

  const {firstName, lastName,address, ...rest} = person
  console.log(firstName, lastName, address, rest);