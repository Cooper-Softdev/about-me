/* eslint-disable no-inner-declarations */
'use strict';

let userName = prompt('Hey you! What\'s your name? Or type skip to...skip.');

if (userName !== 'skip') {
  alert(`Welcome to my about me ${userName}! To learn a bit... about me, let's play a guessing game, answer with yes/no or y/n`);
  let correctGuess = 0;
  // Question1
  function firstQuestion() {
    let questionOne = prompt('Do I have any pets?').toLowerCase();

    if (questionOne === 'y' || questionOne === 'yes') {
      alert(`${userName}! You are correct! I have 3 sled dogs, Hanzo, Sombra, and Misty. Here's a classic sled dog saying "If you pets my head, I'll pulls the sled"`);
      correctGuess++;
    } else if (questionOne === 'n' || questionOne === 'no') {
      alert(`Sorry ${userName}, not quite. I have 3 sled dogs, Hanzo, Sombra, and Misty. Here's a classic sled dog saying "If you pets my head, I'll pulls the sled"`);
    }
  }


  function secondQuestion() {
    let questionTwo = prompt('Next question! Do I play an instrument?').toLowerCase();
    if (questionTwo === 'y' || questionTwo === 'yes') {
      alert(`It depends ${userName}, is mayonnaise an instrument? I'm kidding, I'm relearning guitar, I haven't played in years.`);
      correctGuess++;
    } else if (questionTwo === 'n' || questionTwo === 'no') {
      alert(`Kind of correct ${userName} I'm relearning guitar after a long hiatus, so technically no I don't play, what I do-do is try real hard!`);
    }
  }


  function thirdQuestion() {
    //Question3
    let questionThree = prompt('This one should be easy. Am I a fan of motor sports?').toLowerCase();
    if (questionThree === 'y' || questionThree === 'yes') {
      alert('Oh I sure am, I have a fancy sport bike because I wish I was Valentino Rossi.');
      correctGuess++;
    } else if (questionThree === 'n' || questionThree === 'no') {
      alert('Oof that is incorrect, there\'s a pattern to these answers, ya know.');
    }
  }


  function fourthQuestion() {
    //Question4
    let questionFour = prompt('Am I down with the Spice Melange? Am I a Capsaicin Connoisseur?').toLowerCase();
    if (questionFour === 'y' || questionFour === 'yes') {
      alert(`Yes! ${userName} I'm definitely addicted to the spice .`);
      correctGuess++;
    } else if (questionFour === 'n' || questionFour === 'no') {
      alert(`${userName} I'm sorry, but I do like spice. I'm not weird about it though, hotter isn't better, there's a limit.`);
    }
  }

  function fifthQuestion() {
    //Question5
    let questionFive = prompt('Do I have any siblings?').toLowerCase();
    if (questionFive === 'y' || questionFive === 'yes') {
      alert('Both answers are correct. I have a step-brother/sister and a half-brother. I didn\'t grow up with either and I just learned of the existence of the half-brother... Dad didn\'t know he had another kid.');
      correctGuess++;
    } else if (questionFive === 'n' || questionFive === 'yes') {
      alert('Both answers are correct. I have a step-brother/sister and a half-brother. I didn\'t grow up with either and I just learned of the existence of the half-brother... Dad didn\'t know he had another kid.');
      correctGuess++;
    }
  }


  function sixthQuestion() {
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
        } else if (questionSix > totalDogs) {
          wrongGuess++;
          alert('That\'s too many! Try lower?');
        } else if (questionSix < totalDogs) {
          wrongGuess++;
          alert('That\'s too few, try higher?');
        }
      }
    }
  }
  let guessedDogsArr = [];
  let wrongGuesses = 0;
  const myDogsArr = ['hanzo', 'sombra', 'misty'];

  function seventhQuestion() {
    while (wrongGuesses < 6 && guessedDogsArr.length !== myDogsArr.length) {
      let dogGuess = prompt('Can you guess the names of my dogs? One at a time only please or you\'ll break me.').toLowerCase();

      if (guessedDogsArr.indexOf(dogGuess) !== -1) {
        alert(`You've guessed ${dogGuess} correctly already, try another name!`);
      } else if (myDogsArr.indexOf(dogGuess) !== -1) {
        guessedDogsArr.push(dogGuess);
        alert('Good guess!');
      } else {
        wrongGuesses++;
        alert(`I'm sorry ${dogGuess} is not one, attempt ${wrongGuesses} / 6, try again`);
      }
    }
  }
  firstQuestion();
  secondQuestion();
  thirdQuestion();
  fourthQuestion();
  fifthQuestion();
  sixthQuestion();
  seventhQuestion();
  if (guessedDogsArr.length === myDogsArr.length) {
    correctGuess++;
    console.log(correctGuess);
    alert(`Congrats! You correctly guessed them all! Of all the questions you got ${correctGuess} out of 7 questions right!`);
  }
  if (guessedDogsArr.length !== myDogsArr.length && wrongGuesses === 6) {
    alert(`Great effort, but you did not guess them all correctly, my dogs are ${myDogsArr}, you got ${correctGuess} out of 7 questions right!`);
  }
}

document.getElementById('enterButton').addEventListener('click', function () {
  document.getElementById('layerOne').style.display = 'none';
  document.getElementById('layerTwo').style.display = 'block';
});

const typedText = document.querySelector('h1.typedText');
const textArray = ['Beware, O Weary Traveler!\n\nHere lies the threshold of peril and doom,\nA realm where dragons and dungeons do loom.\nTread lightly, and with caution proceed,\nFor the brave and the foolish alike may bleed.\n\nMonsters and magic, darkness and strife,\nIn these uncharted lands, danger is rife.\nHeed these words, lest your fate be sealed,\nAnd your life forever from this world be peeled.\n\nArm yourself with courage and wit,\nFor in this realm, the weak shall submit.\nTurn back now, or face your fears,\nBut remember, traveler: no one leaves without tears.\n\nSo, adventurers, with heart and soul - beware!\nFor those who enter this realm, do truly dare.\nLet this warning echo through your mind,\nAnd may the light of fortune and glory you find.'];
const typingDelay = 50; // milliseconds
let textArrayIndex = 0;
let charIndex = 0;
const cursor = document.getElementById('cursor');

function typer() {
  if (charIndex < textArray[textArrayIndex].length) {
    const currentChar = textArray[textArrayIndex].charAt(charIndex);
    const newSpan = document.createElement('span');
    newSpan.textContent = currentChar === '\n' ? ' ' : currentChar;
    typedText.appendChild(newSpan);
    if (currentChar === '\n') {
      typedText.appendChild(document.createElement('br'));
    }
    charIndex++;
    setTimeout(typer, typingDelay);
  }
  // Add this line to move the cursor after the last character
  typedText.appendChild(cursor);
}
document.addEventListener('DOMContentLoaded', function () {
  typer();
});

// Beware, O Weary Traveler!\n\n
// Here lies the threshold of peril and doom,\n\n
// A realm where dragons and dungeons do loom.\n\n
// Tread lightly, and with caution proceed,\n\n
// For the brave and the foolish alike may bleed.\n\n
// \n\n
// Monsters and magic, darkness and strife,\n\n
// In these uncharted lands, danger is rife.\n\n
// Heed these words, lest your fate be sealed,\n\n
// And your life force forever from this world be peeled.\n\n
// \n\n
// Arm yourself with courage and wit,\n\n
// For in this realm, the weak shall submit.\n\n
// Turn back now, or face your fears,\n\n
// But remember, traveler: no one leaves here without tears.\n\n
// \n\n
// So, adventurers, with heart and soul, beware,\n\n
// For those who enter this realm do truly dare.\n\n
// Let this warning echo through your mind,\n\n
// And may the light of fortune and glory you find.

// Beware, O Weary Traveler!<br>
// Here lies the threshold of peril and doom,<br>
// A realm where dragons and dungeons do loom.<br>
// Tread lightly, and with caution proceed,<br>
// For the brave and the foolish alike may bleed.<br>
// <br>
// Monsters and magic, darkness and strife,<br>
// In these uncharted lands, danger is rife.<br>
// Heed these words, lest your fate be sealed,<br>
// And your life force forever from this world be peeled.<br>
// <br>
// Arm yourself with courage and wit,<br>
// For in this realm, the weak shall submit.<br>
// Turn back now, or face your fears,<br>
// But remember, traveler: no one leaves here without tears.<br>
// <br>
// So, adventurers, with heart and soul, beware,<br>
// For those who enter this realm do truly dare.<br>
// Let this warning echo through your mind,<br>
// And may the light of fortune and glory you find. -->
