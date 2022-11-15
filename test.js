const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.length);

arr.splice(0, 1);

console.log(arr.length);

let position = arr.findIndex((i) => i == 4);
console.log(position);

arr.splice(position, 1);

console.log(arr.length);
console.log(arr);
