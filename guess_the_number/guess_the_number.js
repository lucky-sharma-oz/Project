// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

while (guess !== secretNumber) {
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (guess > secretNumber) {
        alert("Too high! Try again.");
    } 
    else if (guess < secretNumber) {
        alert("Too low! Try again.");
    } 
    else {
        alert(`🎉 Correct! The number was ${secretNumber}.
You guessed it in ${attempts} attempts.`);
    }
}
