//QS 1
let num = [1, 2, 3, 4, 5, 6, 2, 3];
let a = prompt("Enter the Target :");
let target = parseInt(a);
for (let i = 0; i < num.length; i++) {
  if (num[i] == target) {
    num.splice(i, 1);
  }
}
console.log(num);

//QS2

let num2 = 23456;
console.log(Math.floor(num2 / 10));

//QS3

let num1 = 287152;
let sum = 0;
for (let i = 0; num1 > 0; i++) {
  let a = num1 % 10;
  num1 = Math.floor(num1 / 10);
  sum = sum + a;
}
console.log(Math.floor(sum));

//QS4
let num3 = 0;
let ans = 1;
for (let i = 1; i <= num1; i++) {
  ans = ans * i;
}
console.log(ans);

//QS5

let arr = [-2, -17, -7, -3, -1];
let a1 = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > a1) {
    a1 = arr[i];
  }
}
console.log(a1);

