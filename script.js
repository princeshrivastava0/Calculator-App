const input = document.getElementById("display"); //Display
const digitsBtn = document.querySelectorAll(".btn"); //Number Buttons
const submitBtn = document.querySelector(".submit"); //Submit Button
const resetBtn = document.querySelector(".reset"); //Reset Button
const decimalBtn = document.getElementById("decimal"); //Decimal Button

// Maths Operations Buttons
const divisionBtn = document.getElementById("divide");
const multiplicationBtn = document.getElementById("multiply");
const substractBtn = document.getElementById("substract");
const addBtn = document.getElementById("add");

// Disabling Operations Buttons bydefault except substract button
divisionBtn.disabled = true;
multiplicationBtn.disabled = true;
addBtn.disabled = true;
substractBtn.disabled = false;
// Decimal Button
decimalBtn.disabled = false;

let currentValue = false;

const display = (digitsBtn) => {
  // Clearing Display once an operation completes
  if (currentValue) {
    input.value = "";
    currentValue = false;    
  }
  
  // Enabling Operations Buttons once a digit is entered
  if (
    Number(digitsBtn.target.value) >= 0 &&
    Number(digitsBtn.target.value) <= 9
  ) {    
    divisionBtn.disabled = false;
    multiplicationBtn.disabled = false;
    addBtn.disabled = false;
    substractBtn.disabled = false;
  }

  // Disabling Operations Buttons once an operation is entered & enabling decimal button
  if (
    digitsBtn.target.value === "/" ||
    digitsBtn.target.value === "*" ||
    digitsBtn.target.value === "-" ||
    digitsBtn.target.value === "+"
  ) {
    divisionBtn.disabled = true;
    multiplicationBtn.disabled = true;
    addBtn.disabled = true;
    substractBtn.disabled = true;
    decimalBtn.disabled = false;
  }
// Disabling decimal button once a decimal is entered
  if (digitsBtn.target.value === ".") {
    input.value += digitsBtn.target.value;
    decimalBtn.disabled = true;
  } else {
    input.value += digitsBtn.target.value;
    input.scrollLeft = input.scrollWidth;
  }  
};

// assigning Display Function to all the Buttons except Reset & Submit Buttons, onclick event.
digitsBtn.forEach((btn) => {
  btn.addEventListener("click", display);
});

// Calculate function to evaluate values inside the display element, using JavaScript in-built eval() method.
const calculate = () => {
  try{
    if (input.value === "") {    
      input.value = "";
      substractBtn.disabled = false;
      decimalBtn.disabled = false;   
      return alert("Please Enter a Valid Number");
    } else {
      let output = eval(input.value);    
      input.value = output;
      currentValue = true;    
      divisionBtn.disabled = true;
      multiplicationBtn.disabled = true;
      addBtn.disabled = true;
      substractBtn.disabled = false;
      decimalBtn.disabled = false;    
    }
  }catch(err){
    input.value = "";
      substractBtn.disabled = false;
      decimalBtn.disabled = false;   
    return alert("Please Enter a Valid Number");
  }
  
};

submitBtn.addEventListener("click", calculate);

// Reset Function to empty the display value
const reset = () => {
  input.value = null;
  substractBtn.disabled = false;
  decimalBtn.disabled = false;
};

resetBtn.addEventListener("click", reset);
