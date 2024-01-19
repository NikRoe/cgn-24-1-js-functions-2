console.clear();

// function declaration
// name = add3Numbers
// should be able to consume 3 parameters
// should sum the parameters up and save them in a constant called sum
// should console.log the sum

function add3Numbers(x, y, z) {
  const sum = x + y + z;

  return sum;
}

const firstSum = add3Numbers(2, 4, 5);

// console.log(firstSum);

function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
    console.log("I am never logged in the console.");
  } else {
    return false;
    console.log("Me neither.");
  }
}

const isInputLonger3 = checkInputLength("tes");

// console.log(isInputLonger3);

// Arrow Function with explicit return

// const addNumbers = (first, second) => {
//   return first + second;
// };

// const secondSum = addNumbers(2, 7);

// console.log(secondSum);

// Arrow Function with implicit return

const addNumbers = (first, second) => first + second;

const secondSum = addNumbers(2, 7);

console.log(secondSum);
