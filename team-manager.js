// dependency for inquirer npm package
var inquirer = require("inquirer");
// constructor function used to create programmers objects
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        if (Math.floor((Math.random() * 2) === 0)) {
            offense++;
            console.log(this.name + "'s offense has gone up!\n----------");
        }
        else {
            this.defense++;
            console.log(this.name + "'s defense has gone up!\n----------");
        }
    }
    this.badGame = function () {
        if (Math.floor((Math.random() * 2) === 0)) {
            offense--;
            console.log(this.name + "'s offense has gone down!\n----------");
        }
        else {
            this.defense--;
            console.log(this.name + "'s defense has gone down!\n----------");
        }
    }
    this.printStats = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
            "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
    }
}
// creates the printInfo method and applies it to all programmer objects
Player.prototype.printInfo = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffense: " + this.offense + "\nDefense: " + this.defense);
};
// variable we will use to count how many times our questions have been asked
var count = 0;
function askQuestion() {
    // if statement to ensure that our questions are only asked five times
    if (count < 3) {
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your current position?"
            }, {
                name: "offense",
                message: "What is your offense rating?"
            }, {
                name: "defense",
                message: "What is your defense rating?"
            }
        ]).then(function (answers) {
            // initializes the variable newProgrammer to be a programmer object which will take
            // in all of the user's answers to the questions above
            var newPlayer = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense);
            // printInfo method is run to show that the newProgrammer object was successfully created and filled
            newPlayer.printInfo();
            // add one to count to increment our recursive loop by one
            count++;
            // run the askquestion function again so as to either end the loop or ask the questions again
            askQuestion();
        });
        // else statement which prints "all questions asked" to the console
        // when the code has been run five times
    }
    else {
        console.log("All questions asked");
    }
};
// call askquestion to run our code
askQuestion();




