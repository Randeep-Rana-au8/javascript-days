let arr = [2, 5, 3];

// Original Map method
let newarr = arr.map((item) => item * item);
console.log(newarr);

// Polyfill map method
Array.prototype.mymap = function (callback) {
  let arr2 = this;
  let newArr2 = [];
  for (item of arr2) {
    newArr2.push(callback(item));
  }
  return newArr2;
};

let arr3 = arr.mymap((i) => i * i);
console.log(arr3);
