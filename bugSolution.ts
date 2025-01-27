function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

//Corrected function for type narrowing
function processData(data: number | string): number {
  if (typeof data === 'number') {
    return data * 2; 
  } else if (typeof data === 'string') {
    const num = parseInt(data, 10);
    if (isNaN(num)) {
      throw new Error('Invalid input: string cannot be parsed to a number');
    }
    return num * 2; 
  } else {
    throw new Error('Invalid input type');
  }
}

let result3 = processData(5); // Correctly returns 10
let result4 = processData('5');//Correctly returns 10
let result5 = processData('abc'); //Throws an error