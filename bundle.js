(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "foods": {
    "eggs": {
      "0": "ener-g",
      "1": "tofu"
    },
    "milks": {
      "0": "rice",
      "1": "soy",
      "2": "nut",
      "3": "coconut",
      "4": "oat",
      "5": "almond",
      "6": "cashew"
    },
    "cheese": {
      "0": "daiya",
      "1": "follow your heart ",
      "2": "teese",
      "3": "sheese ",
      "4": "vegan rella",
      "5": "cheezly ",
      "6": "parma",
      "7": "soymage vegan parmesan "
    },
    "meat": {
      "0": "trader joe's",
      "1": "tofurky",
      "2": "nate's",
      "3": "yves",
      "4": "morningstar farms",
      "5": "boca",
      "6": "lightlife's",
      "7": "health is wealth",
      "8": "soyboys",
      "9": "gardenburger",
      "10": "amy's",
      "11": "gimmie lean",
      "12": "smart deli",
      "13": "smart ground",
      "14": "smart bacon"
    },
    "grains": {
      "0": "quinoa",
      "1": "rice",
      "2": "bulgur",
      "3": "cuscus",
      "4": "rye",
      "5": "oats",
      "6": "barley",
      "7": "millet",
      "8": "brown rice",
      "9": "buckwheat",
      "10": "spelt",
      "11": "corn",
      "12": "whole wheat",
      "13": "amaranth",
      "14": "farro",
      "15": "freekeh",
      "16": "kamut",
      "17": "teff",
      "18": "wheat berry"
    }
  },
  "brands": {
    "0": "silk",
    "1": "soy-delicious",
    "2": "soy dream",
    "3": "westsoy",
    "4": "pacific foods",
    "5": "rice dream",
    "6": "nutrisoya",
    "7": "blue diamond",
    "8": "soylutions"
  },
  "list": {
    "0": "almond",
    "1": "amaranth",
    "2": "amy's",
    "3": "barley",
    "4": "blue diamond",
    "5": "boca",
    "6": "brown rice",
    "7": "buckwheat",
    "8": "bulgur",
    "9": "cashew",
    "10": "cheezly",
    "11": "coconut",
    "12": "corn",
    "13": "cuscus",
    "14": "daiya",
    "15": "ener-g",
    "16": "farro",
    "17": "follow your heart",
    "18": "freekeh",
    "19": "gardenburger",
    "20": "gimmie lean",
    "21": "health is wealth",
    "22": "kamut",
    "23": "lightlife's",
    "24": "millet",
    "25": "morningstar farms",
    "26": "nate's",
    "27": "nut",
    "28": "nutrisoya",
    "29": "oat",
    "30": "oats",
    "31": "pacific foods",
    "32": "parma",
    "33": "quinoa",
    "34": "rice dream",
    "35": "rice",
    "36": "rye",
    "37": "sheese",
    "38": "silk",
    "39": "smart bacon",
    "40": "smart deli",
    "41": "smart ground",
    "42": "soy dream",
    "43": "soy-delicious",
    "44": "soy",
    "45": "soyboys",
    "46": "soylutions",
    "47": "soymage vegan parmesan",
    "48": "spelt",
    "49": "teese",
    "50": "teff",
    "51": "tofu",
    "52": "tofurky",
    "53": "trader joe's",
    "54": "vegan rella",
    "55": "westsoy",
    "56": "wheat berry",
    "57": "whole wheat",
    "58": "yves"
  }
}

},{}],2:[function(require,module,exports){
const items = require('../db.json');

const buildRandomString = length => {
  let randomStr = "Lorem Ipsum";
  let values = [];
  while (length > 0) {
    randomStr += " ";
    const randN = Math.floor(
      Math.random() * Object.keys(items.list).length + 1
    );
    values.push(randN);
    console.log(randN);
    randomStr += items.list[randN];
    length--;
  }
  return randomStr;
};

module.exports = buildRandomString;

},{"../db.json":1}],3:[function(require,module,exports){
const buildRandomString = require('./../../../back/utils/generator.js');

document.querySelector('#generateRandom').addEventListener('click', () => {
  console.log(buildRandomString(20));
})

},{"./../../../back/utils/generator.js":2}]},{},[3]);
