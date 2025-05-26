
function sayHello() {
    for (var i=0; i<5; i++) //Prints 0 to 4 in the console, i should only be accessible in the for block
        console.log(i);
        console.log(i); // However, calling the variable i outside the fuction still gives an output of 0-5
}

sayHello();//calls the function. output is 0-4

//To resolve this, modern Javascript introduced the var-keyword let:
function sayHello3() {
    for (let j=0; j<5; j++) //Prints 0 to 4 in the console, i should only be accessible in the for block
        console.log(j);
        console.log(j); // Returns an error in the console because let variables are only accessible within the block.
}
sayHello3();//calls the function. output is 0-4.

//const variables are also only accessible in the block(block scoped)
//Differences between let and const keywords:
const x=1;
x=2 //Will return an error because the value of x is fixed at 1
console.log(x) //will always return 1
//NB. let varaibles can be reassigned values, const variables cannot be reassigned values
