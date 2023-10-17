class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    calculateAverageScore() {
        if (this.scores.length === 0) {
            return 0;
        }
        const total = this.scores.reduce((sum, score) => sum + score, 0);
        return total / this.scores.length;
    }

    shouldAdmit() {
        const averageScore = this.calculateAverageScore();
        return averageScore >= 90;
    }

    status() {
        const averageScore = this.calculateAverageScore();

        if (averageScore >= 90) {
            return "Accepted";
        } else if (averageScore >= 80) {
            return "Reserve";
        } else if (averageScore >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

// Create objects for the candidates
const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// Add scores to candidates' records
bubbaBear.addScore(83);
merryMaltese.addScore(95);
gladGator.addScore(80);

// Get the status for each candidate
const bubbaBearStatus = bubbaBear.status();
const merryMalteseStatus = merryMaltese.status();
const gladGatorStatus = gladGator.status();

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.calculateAverageScore()}% and has a status of ${bubbaBearStatus}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.calculateAverageScore()}% and has a status of ${merryMalteseStatus}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.calculateAverageScore()}% and has a status of ${gladGatorStatus}.`);

// Reset Glad Gator's scores for the test
gladGator.scores = [75, 78, 62];

// Define the target status
const targetStatus = "Accepted";

let testsTaken = 0;

while (gladGator.status() !== targetStatus) {
    // Increment the test score by 5 (or any other increment you prefer)
    const newScore = gladGator.scores[testsTaken % 3] + 5;
    
    // Ensure the score doesn't exceed 100
    if (newScore <= 100) {
        gladGator.scores[testsTaken % 3] = newScore;
        testsTaken++;
    } else {
        break; // Break the loop if the score cannot be increased further
    }
}

console.log(`Glad Gator reached ${targetStatus} status after taking ${testsTaken} tests.`);
