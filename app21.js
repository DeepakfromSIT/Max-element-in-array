let arr = [1, 5, 7, 2, 9, 11, 14, 18, 19, 20, 45];
let max = 0;

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
