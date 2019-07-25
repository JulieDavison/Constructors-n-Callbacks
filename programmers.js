// In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.
// Your "Programmer" constructor should be able to take in the following information...
// The programmer's name
// Their position/job title
// How old they are
// Favorite programming language


// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
  }

// Now create a method for the constructor that would print all of the information contained within an object to the console.
// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
    console.log(
      "Name: " + this.name + 
      "\nPosition: " + this.position +
      "\nAge: " + this.age + 
      "\nLanguages: " + this.language);
  };


// Finally, create a "Programmer" object and call the method to print its contents