const buildRandomString = require('./../../../back/utils/generator.js');
const output = document.querySelector('#randomOutput');
const randomBtn = document.querySelector('#generateRandom');
const copyBtn = document.querySelector('#copyToClipboard');
const howManyWords = document.querySelector("#howManyWords");

randomBtn.addEventListener('click', () => {
  const numberOfWords = howManyWords.value;
  const string = buildRandomString(numberOfWords);
  output.value = string;
});

copyBtn.addEventListener('click', () => {
  output.select();
  document.execCommand("copy");
  alert("Copied the text: " + output.value);
});
