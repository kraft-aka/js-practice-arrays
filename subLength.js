// Write a function groceries() that takes an array of object literals of grocery items.
// The function should return a string with each item separated by a comma except the last
// two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

// Examples:Write a function groceries() that takes an array of object literals of grocery items.
// The function should return a string with each item separated by a comma except the last two
// items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.


// Write function below
const groceries = (arr) => {
  if (arr.length == 1) {
    const arrI = arr.map((i) => i.item).join("");
    return arrI;
  } else {
    let arrItems = arr.map((grocery) => grocery.item);
    const lastItem = arrItems.pop();
    arrItems = arrItems.join(", ") + " and " + lastItem;
    return arrItems;
  }
};

// Examples:

groceries([
  { item: "Carrots" },
  { item: "Hummus" },
  { item: "Pesto" },
  { item: "Rigatoni" },
]);
// returns 'Carrots, Hummus, Pesto and Rigatoni'

console.log(groceries([{ item: "Bread" }, { item: "Butter" }]));
// returns 'Bread and Butter'

groceries([{ item: "Cheese Balls" }]);
// returns 'Cheese Balls'

