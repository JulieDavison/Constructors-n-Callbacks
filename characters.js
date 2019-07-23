function Character (name, profession, age, gender, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.gender = gender;
    this.strength = strength;
    this.hitPoints = hitPoints;
    
    this.printStats = function() {
        console.log(
            "Name: " + this.name + 
            "\nProfession: " + this.profession + 
            "\nAge: " + this.age + 
            "\nGender: " + this.gender + 
            "\nStrength: " + this.strength + 
            "\nHitPoints: " + this.hitPoints);
            console.log("\n-------------\n");
        };
        
}

var wizard = new Character ("Mr. Wizard", "Magician", 300, "Male", 10, 10);
var apprentice = new Character ("Ms. Apprentice", "Student", 40, "Female", 10, 10);

wizard.printStats();
apprentice.printStats();