// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase10 = require("./1-convertToBase10");

const hexChart = "0123456789abcdef";

const dec = element => {
  let quotient = Math.floor(element / 16);
  let remainder = element % 16;

  let digits = [];

  if (quotient === 0) {return [hexChart[remainder]];}

  digits.push(hexChart[remainder]);
  digits = [...digits, ...dec(quotient)];

  return digits;
}

const byte = element => {
  return dec(convertToBase10("0b"+element));

}

const bin = element => {

  let bytes = [];

  for (let i = 0; i < element.length; i += 4) {
    bytes.push(byte(element.slice(i, i+4)));
  }

  return bytes.join("");

}

const convertToBase16 = element => {
  // Your code here
  if (typeof element === "number") {
    return "0x" + dec(element).reverse().join('');
  }

  if (typeof element === "string") {
    return "0x" + bin(element.slice(2));
  }

};

/******************************************************************************/

// console.log(convertToBase16(4)); // 0x4
// console.log(convertToBase16(65)); // 0x41
// console.log(convertToBase16(256)); // 0x100
// console.log(convertToBase16(123)); // 0x7b
// console.log(convertToBase16(1000)); // 0x3e8

// console.log('––––––');

// console.log(convertToBase16('0b1100')); // 0xc
// console.log(convertToBase16('0b0101')); // 0x5
// console.log(convertToBase16('0b1000')); // 0x8
// console.log(convertToBase16('0b0111')); // 0x7

// console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
