//factorial means éäš
'use strict';
const number = process.argv[2] || 0;
let factor = 1;
for(let i = 1; i <= number; i++){
  factor = factor * i
}
console.log("factorial of " + number +" is "+ factor);

