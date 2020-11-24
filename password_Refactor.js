'use strict';
const args = String(process.argv.slice(2));
const obfuscate = function(input) {
  let result = '';
  for (let x of input) { // for loop go through password
    switch (x) {
    case "a":
      result += "4";
      break;
    case "e":
      result += "3";
      break;
    case "o":
      result += "0";
      break;
    case "l":
      result += "1";
      break;
    default:
      result += x;
    }
  }
  return result;
};
console.log(obfuscate(args));