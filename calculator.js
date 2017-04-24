// Variables
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var write = document.getElementById("stickItHere");

// Event Listeners

addButton.addEventListener("click", function(event){
  var input1 = document.getElementById("input1").value;
  input1 = parseInt(input1);
  var input2 = document.getElementById("input2").value;
  input2 = parseInt(input2);
  operation(input1, input2, add);
});

subtractButton.addEventListener("click", function(event){
  var input1 = document.getElementById("input1").value;
  input1 = parseInt(input1);
  var input2 = document.getElementById("input2").value;
  input2 = parseInt(input2);
  operation(input1, input2, subtract);
});

multiplyButton.addEventListener("click", function(event){
  var input1 = document.getElementById("input1").value;
  input1 = parseInt(input1);
  var input2 = document.getElementById("input2").value;
  input2 = parseInt(input2);
  operation(input1, input2, multiply);
});

divideButton.addEventListener("click", function(event){
  var input1 = document.getElementById("input1").value;
  input1 = parseInt(input1);
  var input2 = document.getElementById("input2").value;
  input2 = parseInt(input2);
  operation(input1, input2, divide);
});



// Functions

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

 function multiply(a, b){
 	var c = a * b;
 	write.innerHTML = c;
 }

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

  function add(a, b){
 	var c = a + b;
 	write.innerHTML = c;
 }


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

  function subtract(a, b){
 	var c = a - b;
 	write.innerHTML = c;
 }


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

 function divide(a, b){
 	var c = a / b;
 	write.innerHTML = c;
 }


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

 function operation(a, b, funct){
 	var c = funct(a,b);
 }