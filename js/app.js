'use strict';

let userName = prompt('Hey you! What\'s your name? Or type skip to...skip.');

if (userName !== 'skip') {
  alert(`Welcome to my about me ${userName}! To learn a bit... about me, let's play a guessing game, answer with yes/no or y/n`);
  let correctGuess = 0;
  // Question1
  let questionOne = prompt('Do I have any pets?').toLowerCase();

  if (questionOne === 'y' || questionOne === 'yes') {
    alert(`${userName}! You are correct! I have 3 sled dogs, Hanzo, Sombra, and Misty. Here's a classic sled dog saying "If you pets my head, I'll pulls the sled"`);
    correctGuess++;
  } else if (questionOne === 'n' || questionOne === 'no') {
    alert(`Sorry ${userName}, not quite. I have 3 sled dogs, Hanzo, Sombra, and Misty. Here's a classic sled dog saying "If you pets my head, I'll pulls the sled"`);
  }
  console.log(questionOne);
  console.log(correctGuess);

  // Question2
  let questionTwo = prompt('Next question! Do I play an instrument?').toLowerCase();
  if (questionTwo === 'y' || questionTwo === 'yes') {
    alert(`It depends ${userName}, is mayonnaise an instrument? I'm kidding, I'm relearning guitar, I haven't played in years.`);
    correctGuess++;
  } else if (questionTwo === 'n' || questionTwo === 'no') {
    alert(`Kind of correct ${userName} I'm relearning guitar after a long hiatus, so technically no I don't play, what I do-do is try real hard!`);
  }
  console.log(questionTwo);
  console.log(correctGuess);

  //Question3
  let questionThree = prompt('This one should be easy. Am I a fan of motor sports?').toLowerCase();
  if (questionThree === 'y' || questionThree === 'yes') {
    alert('Oh I sure am, I have a fancy sport bike because I wish I was Valentino Rossi.');
    correctGuess++;
  } else if (questionThree === 'n' || questionThree === 'no') {
    alert('Oof that is incorrect, there\'s a pattern to these answers, ya know.');
  }
  console.log(questionThree);
  console.log(correctGuess);

  //Question4
  let questionFour = prompt('Am I down with the Spice Melange? Am I a Capsaicin Connoisseur?').toLowerCase();
  if (questionFour === 'y' || questionFour === 'yes') {
    alert(`Yes! ${userName} I'm definitely addicted to the spice .`);
    correctGuess++;
  } else if (questionFour === 'n' || questionFour === 'no') {
    alert(`${userName} I'm sorry, but I do like spice. I'm not weird about it though, hotter isn't better, there's a limit.`);
  }
  console.log(questionFour);
  console.log(correctGuess);

  //Question5
  let questionFive = prompt('Do I have any siblings?').toLowerCase();
  if (questionFive === 'y' || questionFive === 'yes') {
    alert('Both answers are correct. I have a step-brother/sister and a half-brother. I didn\'t grow up with either and I just learned of the existence of the half-brother... Dad didn\'t know he had another kid.');
    correctGuess++;
  } else if (questionFive === 'n' || questionFive === 'yes') {
    alert('Both answers are correct. I have a step-brother/sister and a half-brother. I didn\'t grow up with either and I just learned of the existence of the half-brother... Dad didn\'t know he had another kid.');
    correctGuess++;
  }
  console.log(questionFive);
  console.log(correctGuess);

  // Question6
  const totalDogs = '3';
  let wrongGuess = 0;
  while (wrongGuess < 4) {
    let questionSix = prompt('Paying attention? Let\'s hope, how many dogs do I have?');
    if (questionSix === totalDogs) {
      alert('Aww! You do care!');
      correctGuess++;
      break;
    } else {
      if (wrongGuess === 4) {
        alert('That\'s just too many wrong guesses, I have 3 dogs.');
        wrongGuess++;
      } else if (questionSix > totalDogs) {
        alert('That\'s too many! Try lower?');
      } else if (questionSix < totalDogs) {
        alert('That\'s too few, try higher?');
      }
    }
    console.log(questionSix);
    console.log(correctGuess);
  }

  //Question7
  const myDogsArr = ['hanzo', 'sombra', 'misty'];
  let guessedDogsArr = [];
  let wrongGuesses = 0;

  while (wrongGuesses < 6 && guessedDogsArr.length !== myDogsArr.length) {
    let dogGuess = prompt('Can you guess the names of my dogs? One at a time only please or you\'ll break me.').toLowerCase();
    if (myDogsArr.indexOf(dogGuess) !== -1 && guessedDogsArr.indexOf(dogGuess) === -1) {
      guessedDogsArr.push(dogGuess);
      alert('Good guess!');
    }
    console.log(dogGuess);
    console.log(correctGuess);
    console.log(guessedDogsArr);
  }

  if (guessedDogsArr.length === myDogsArr.length) {
    correctGuess++;
    alert(`Congrats! You correctly guessed them all! Of all the questions you got ${correctGuess} out of 7 questions right!`);
  }
  else {
    alert(`Great effort, but you did not guess them all correctly, my dogs are ${myDogsArr}, you got ${correctGuess} out of 7 questions right!`);
    wrongGuesses++;
  }
}
