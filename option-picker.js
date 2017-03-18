#!/usr/bin/env node
'use strict';

const prompt = require('prompt');
let initialPrompt = {
  description: 'Enter your choices (comma separated)',
  name: 'options',
  type: 'string'
};

function randomizeChoice(arr) {
  let length = arr.length;
  let optionInd = null;

  optionInd = Math.floor(Math.random() * (length - 0) + 0);
  console.log('Your option: ' + arr[optionInd]);
  prompt.get({
    description: 'Are you happy with this choice? (Y/n)',
    name: 'done',
    type: 'string'
  }, function(err, result) {
    if (result.done === 'Y' || result.done === 'y') {
      process.exit(0);
    } else {
      if (arr.length > 1) {
        arr.splice(optionInd, 1);
        randomizeChoice(arr);
      } else {
        console.log('Are you sure? There are more options.');
      }
    }
  });
};

// Start prompting
prompt.start();
prompt.get({
    description: 'Enter your choices',
    type: 'string'
  }, function(err, result) {
    let choices = result.question.split(',').map(function(item) {
      return item.trim();
    });
    randomizeChoice(choices);
});
