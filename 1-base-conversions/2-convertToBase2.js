// Convert the integers in the console.logs below to base 2

/******************************************************************************/

let addZeros = require("../utils/addZeros");

let binary = (element) => {
  let bits = [];

  let quotient = Math.floor(element / 2);
  let remainder = element % 2;

  if (quotient === 0) {return [remainder];}

  bits.push(remainder);

  bits = [...bits, ...(binary(quotient))];
  return bits;
}

let binaryHex = (element) => {

  const hexChart = "0123456789abcdef";
  let bytes = [];

  for (let i = 0; i < element.length; i++) {
    let result = binary(hexChart.indexOf(element[i])).reverse().join("");
    if (i > 0 && result.length < 4) {
      result = addZeros(result, 4);
    }
    bytes.push(result);
  }

  return bytes.join("");

}

const convertToBase2 = element => {
  if (typeof element === "number") {return "0b" + binary(element).reverse().join("");}
  return "0b" + binaryHex(element.slice(2));

};

module.exports = convertToBase2;

/******************************************************************************/

// console.log(convertToBase2(4)); // 0b100
// console.log(convertToBase2(65)); // 0b1000001
// console.log(convertToBase2(256)); // 0b100000000
// console.log(convertToBase2(123)); // 0b1111011
// console.log(convertToBase2(1000)); // 0b1111101000

// console.log('––––––');

// console.log(convertToBase2('0xf')); // 0b1111
//console.log(convertToBase2('0xfa')); // 0b11111010
// console.log(convertToBase2('0x1234')); // 0b1001000110100
// console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
// console.log(convertToBase2('0xbf12')); // 0b1011111100010010
