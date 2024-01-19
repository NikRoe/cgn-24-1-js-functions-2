console.clear();

let carrots = 2;
const dishedCleaned = 4;

// Generating a boolean with the help of a comparison operator

const kidDidHelpCleanTheKitchen = dishedCleaned === 3;

// Ternary Operator

let extraCarrots = kidDidHelpCleanTheKitchen ? 2 : 1;

// If-Else Statement

// if (kidDidHelpCleanTheKitchen) {
//   extraCarrots = 2;
// } else {
//   extraCarrots = -1;
// }

// carrots = carrots + extraCarrots;

// console.log(carrots);

// Type coercion

const newCarrots = "0";

if (newCarrots) {
  console.log("Hand out the carrots!!");
} else {
  console.log("Mein Wert war leider false");
}
