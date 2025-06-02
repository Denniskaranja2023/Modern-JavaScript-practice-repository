//To render a list of objects, use map array metthod.
const colors=['red','green','blue'];
//for each color we want a list item <li>color</li>
//const items = colors.map(function(color) {   //pass a call back function that transforms each item in the colors array. It takes one item at a time and returns a new item
 //   return '<li>' + color + '<li>';
//});

//The above can be transformed into an arrow function as below 

const items = colors.map(color => '<li>' + color + '<li>');  //pass a call back function that transforms each item in the colors array. It takes one item at a time and returns a new item
console.log(items);