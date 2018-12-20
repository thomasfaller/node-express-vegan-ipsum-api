const buildRandomString = require('./../../../back/utils/generator.js');
const output = document.querySelector('#randomOutput');
const randomBtn = document.querySelector('#generateRandom');
const copyBtn = document.querySelector('#copyToClipboard');
const howManyWords = document.querySelector("#howManyWords");
// const popup = document.querySelector("#popup");


randomBtn.addEventListener('click', () => {
  const numberOfWords = howManyWords.value;
  const string = buildRandomString(numberOfWords);
  output.value = string;
});


copyBtn.addEventListener('click', () => {
  output.select();
  document.execCommand("copy");
  notify();
});


const notify = () => {
  copyBtn.innerHTML = "Text copied!";
  setTimeout(() => {
    copyBtn.innerHTML = "Copy";
  }, 2000)
}
