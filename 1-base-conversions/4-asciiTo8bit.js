const addZeros = require('../utils/addZeros');
const convertToBase2 = require("./2-convertToBase2");

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  // Your code here
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let binary = convertToBase2(str.charCodeAt(i));
    binary = binary.slice(2);
    binary = addZeros(binary, 8);
    output = output + binary;
  }

  return output;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
console.log(asciiTo8bit('123') === "001100010011001000110011");
// 00110001 00110010 00110011
// console.log("123".charCodeAt(0));

console.log(asciiTo8bit('ABC'));
console.log(asciiTo8bit('ABC') === "010000010100001001000011");
//01000001 0100001001000011

console.log(asciiTo8bit('Hello, world!') === "01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001");
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
