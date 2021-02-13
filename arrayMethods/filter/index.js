// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// filter() does not execute the function for array elements without values.

let arr = [22, 20, 13, 11, 19];

function checkAdult(age) {
  return age >= 18;
}

const adults = arr.filter(checkAdult);

console.log(adults);
