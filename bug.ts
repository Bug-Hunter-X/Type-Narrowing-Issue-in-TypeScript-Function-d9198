function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 will be 8
let result2 = subtract(10, 4); // result2 will be 6

//Uncommon error: Type narrowing issue
function processData(data: number | string): number {
  if (typeof data === 'number') {
    return data * 2; // Correct handling for number
  }
  //Error: missing return statement for string type
  //Data is incorrectly interpreted as number type in the else block
  data = parseInt(data, 10);
  return data;
}

let result3 = processData(5); // Correctly returns 10
let result4 = processData('5');//Incorrectly returns 5 instead of 10