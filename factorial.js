// Write a function factorial() that takes a number as an argument and returns the factorial of the number.

// Write function below


const factorial = (num) => {
  if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num - 1))
  }
}

console.log(factorial(6)); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 