'use strict';

let userName = prompt('Hey you! What\'s your name?');

alert(`Welcome to my about me ${userName}! To learn a bit... about me, let\'s play a guessing game, answer with yes/no or y/n`);

//Question1
let questionOne = prompt('Do I have any pets?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes') {
  alert(`${userName}! You are correct! I have 3 sled dogs, Hanzo, Sombra, and Misty. Here's a classic sled dog saying "If you pets my head, I'll pulls the sled"`);
} else if (questionOne === 'n' || questionOne === 'no') {
  alert(`Sorry ${userName}, not quite. I have 3 sled dogs, Hanzo, Sombra, and Misty. Here's a classic sled dog saying "If you pets my head, I'll pulls the sled"`);
}
console.log(questionOne);

//Question2
let questionTwo = prompt('Next question! Do I play an instrument?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes') {
  alert(`It depends ${userName} is mayonnaise an instrument? I'm kidding, I'm relearning guitar, I haven't played in years.`);
} else if (questionTwo === 'n' || questionTwo === 'no') {
  alert(`Kind of correct ${userName} I'm relearning guitar after a long hiatus, so technically no I don't play, what I do-do is try real hard!`);
}
console.log(questionTwo);

//Question3
let questionThree = prompt('This one should be easy. Am I a fan of motorsports?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes') {
  alert(`Oh I sure do ${userName}, I have a fancy sportbike I ride during the summer as much as I can.`);
} else if (questionThree === 'n' || questionThree === 'no') {
  alert('Oof that is incorrect, there\'s a pattern to these answers, ya know.');
}
console.log(questionThree);

//Question4
let questionFour = prompt('Am I down with the Spice Melange? Am I a Capsaicin Connoisseur').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes') {
  alert(`Yes! I'm definitely addicted to the spice ${userName}.`);
} else if (questionFour === 'n' || questionFour === 'no') {
  alert(`${userName} I'm sorry, but I do like spice. I'm not weird about it though, hotter isn't better, there's a limit.`);
}
console.log(questionFour);

//Question5
let questionFive = prompt('Do I have any siblings?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes') {
  alert(`Both answers are correct ${userName}. I have a step-brother/sister and a half-brother. I didn't grow up with either and I just learned of the existence of the half-brother... Dad didn't know he had another kid.`);
} else if (questionFive === 'n' || questionFive === 'yes') {
  alert(`Both answers are correct ${userName}. I have a step-brother/sister and a half-brother. I didn't grow up with either and I just learned of the existence of the half-brother... Dad didn't know he had another kid.`);
}
console.log(questionFive);
