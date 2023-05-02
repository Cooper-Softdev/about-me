'use strict';

console.log();
let userName = prompt('What is your name?');

alert(`Welcome to the shitshow ${userName} let's answer some questions.`);

let questionOneGuess = prompt('Am I retarded?');
if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('You are correct!');
}
