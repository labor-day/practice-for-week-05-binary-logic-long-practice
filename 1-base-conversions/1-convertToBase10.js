// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {

  let type = null;
  if (str[1] === 'b') {type = 'binary';} else {type = 'hex';}

  str = str.slice(2);

  let sum = 0;

  if (type === "binary") {
    for (let i = 0; i < str.length; i++) {
      sum += (Number(str[i])) * (Math.pow(2, (str.length - 1 - i) ));
    }
    return sum;
  }

  let hexChart = "0123456789abcdef";

  for (let i = 0; i < str.length; i++) {
    sum += hexChart.indexOf(str[i]) * Math.pow(16, (str.length - 1 -i));
  }
  return sum;


};

module.exports = convertToBase10;

/******************************************************************************/

// console.log(convertToBase10('0b1100')); // 12
// console.log(convertToBase10('0b0101')); // 5
// console.log(convertToBase10('0b1000')); // 8
// console.log(convertToBase10('0b0111')); // 7

// console.log('––––––');

// console.log(convertToBase10('0b10100101')); // 165
// console.log(convertToBase10('0b11111111')); // 255
// console.log(convertToBase10('0b01010101')); // 85
// console.log(convertToBase10('0b00110011')); // 51

// console.log('––––––');

// console.log(convertToBase10('0xf')); // 15
// console.log(convertToBase10('0xfa')); // 250
// console.log(convertToBase10('0x1234')); // 4660
// console.log(convertToBase10('0xc9a1')); // 51617
// console.log(convertToBase10('0xbf12')); // 48914
