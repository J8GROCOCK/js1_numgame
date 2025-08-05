function  generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess(){
    let guess
    while (true) {
        console.log("Please input an integer number between 1 and 100: ")
        let input = prompt();

        if(input === null) {
            console.log("Input cancelled. Exiting game.");
            return;
        }

        guess = parseInt(input, 10);

        if (!Number.isNaN(guess) && guess >= 1 && guess <= 100) {
            return guess;
        }
    }
}

function checkGuess(number,guess,counter){
    if (guess === undefined) return undefined;

    if (guess === number) {
        console.log(`Bingo! It was ${guess} all along!`)
        return 1;
    } else if (guess > number) {
        console.log(`${guess} Is Too High! Attempt ${counter + 1} of 10`)
        return 0;
    } else {
        console.log(`${guess} Is Too Low! Attempt ${counter + 1} of 10`)
        return 0;
    }
}

function calculatePoints(counter){
    if (counter < 4) {
        return 3
    } else if (counter > 3 && counter < 7){
        return 2
    } else {
        return 1
    }
}



// plays one round of the game
function game(){
    let win = false
    let counter = 0
    const number = generateRandomNumber()

    console.log("Welcome to the number game! The faster you guess the number the more points you will get!")
    console.log("You'll get 3 points if you guess correctly in 3 or less")
    console.log("You'll get 2 points if you guess correctly in 6 or less")
    console.log("You'll get 1 point if you guess correctly in 10 or less")

    while(!win && counter < 10) {
        const guess = getPlayerGuess()
        const result = checkGuess(number,guess,counter);
        if (result === 1){
            counter++
            win = true
        } else if (result === undefined) {
            return;
        } else {
            counter++
        }
    }

    if (win){
        console.log(`You Win! It took you ${counter} guesses and you got ${calculatePoints(counter)} points!  Call game() to play again!`)
    } else {
        console.log(`You Lose! You took to many guesses! Call game() to play again!`)
    }
}