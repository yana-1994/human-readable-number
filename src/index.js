module.exports = function toReadable (number) {
  let result = '';
  let hund = '';
  let dec = '';
  let unit = '';
  switch (Math.floor(number / 100)) {
      case 1: hund = 'one hundred ';
      break;
      case 2: hund = 'two hundred ';
      break;
      case 3: hund = 'three hundred ';
      break;
      case 4: hund = 'four hundred ';
      break;
      case 5: hund = 'five hundred ';
      break;
      case 6: hund = 'six hundred ';
      break;
      case 7: hund = 'seven hundred ';
      break;
      case 8: hund = 'eight hundred ';
      break;
      case 9: hund = 'nine hundred ';
      break;
      default: hund = '';
      break;
  };
  if (number === 0) {
    unit = 'zero'
}
  else if (Math.floor(number % 100) > 19 || Math.floor(number % 100) <= 10) {
      switch (Math.floor((number % 100) / 10)) {
      case 1: dec = 'ten';
      break;
      case 2: dec = 'twenty ';
      break;
      case 3: dec = 'thirty ';
      break;
      case 4: dec = 'forty ';
      break;
      case 5: dec = 'fifty ';
      break;
      case 6: dec = 'sixty ';
      break;
      case 7: dec = 'seventy ';
      break;
      case 8: dec = 'eighty ';
      break;
      case 9: dec = 'ninety ';
      break;
      default: dec = '';
      break;
  };
     switch (Math.floor(number % 10)) {
      case 1: unit = 'one';
      break;
      case 2: unit = 'two';
      break;
      case 3: unit = 'three';
      break;
      case 4: unit = 'four';
      break;
      case 5: unit = 'five';
      break;
      case 6: unit = 'six';
      break;
      case 7: unit = 'seven';
      break;
      case 8: unit = 'eight';
      break;
      case 9: unit = 'nine';
      break;
      default: unit = '';
      break;   
     };
     }
     else {
         switch (Math.floor(number % 100)) {
      case 11: dec = 'eleven';
      break;
      case 12: dec = 'twelve';
      break;
      case 13: dec = 'thirteen';
      break;
      case 14: dec = 'fourteen';
      break;
      case 15: dec = 'fifteen';
      break;
      case 16: dec = 'sixteen';
      break;
      case 17: dec = 'seventeen';
      break;
      case 18: dec = 'eighteen';
      break;
      case 19: dec = 'nineteen';
      break;
      default: dec = '';
      break;   
         }
     };   
  result = hund + dec + unit;
  return result.trim();
}
