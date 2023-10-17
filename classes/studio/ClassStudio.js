//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. 
//Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        sum = sum/this.scores.length;
        sum = Math.round(sum*10)/10;
        return sum;
    }

    status() {
        //return a string based on a candidates average
        if (this.average() >= 90) {
            return `${this.name} earned an average test score of ${this.average()}% and has a status of "Accepted".`;
        } else if (this.average() >= 80 && this.average() < 90) {
            return `${this.name} earned an average test score of ${this.average()}% and has a status of "Reserve".`;
        } else if (this.average() >= 70 && this.average() < 80) {
            return `${this.name} earned an average test score of ${this.average()}% and has a status of "Probationary".`;
        } else if (this.average() < 70) {
            return `${this.name} earned an average test score of ${this.average()}% and has a status of "Rejected".`;
        }
    }
}
//Add a status() method to CrewCandidate. The method returns a string (Accepted, Reserve, Probationary, or Rejected) 
//depending on a candidate’s average.

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);

let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);

let alligator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

bear.addScore(83);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? 
//How many to reach Accepted? Remember, scores cannot exceed 100%.

for (let i = 0; alligator.average() < 80; i++) {
    alligator.addScore(100);
    console.log(`After ${i+1} attempts, ${alligator.status()}`)
}