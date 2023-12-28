const cardUpdate = document.querySelector("#card-number-update");
const cardNumberInput = document.querySelector("#card");
const cardError = document.querySelector("#card-error-update");
const cardNameInput = document.querySelector("#name");
const nameUpdate = document.querySelector("#card-name-update");
const nameError = document.querySelector("#card-name-error");
const cardCvcInput = document.querySelector("#cvc");
const cvcUpdate = document.querySelector("#card-cvc-update");
const cvcError = document.querySelector("#card-cvc-error");
const cardExpMonthInput = document.querySelector("#exp");
const cardExpYearInput = document.querySelector("#yy");
const expError = document.querySelector("#card-exp-error");
const mmUpdate = document.querySelector("#card-mm-update");
const yyUpdate = document.querySelector("#card-yy-update");
const form = document.querySelector("#form");

const cardNumberRegex = /^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/;
const cardNameRegex = /^[a-zA-Z]+(?:\s?[a-zA-Z]+)?$/;
const cardCvcRegex = /^[0-9]{3}$/;
const cardExpRegex = /^(0[1-9]|1[0-2])$/;
const cardExpYearRegex = /^(2[3-9]|3[0-9])$/;

const numberErrorText = "Please enter valid card number";
const nameErrorText = "Please enter valid name";
const cvcErrorText = "Please enter valid cvc";
const expErrorText = "Can't be blank";

let finalNumber, finalName, finalCvc, finalExpMonth, finalExpYear;

// Generic regex validation function
function validateInput(inputValue, regex) {
  return regex.test(inputValue);
}

// Generic content updation and error handling function
function handleOutput(
  inputElement,
  regex,
  updateElement,
  errorElement,
  errorMsgText
) {
  const inputValue = inputElement.value.trim();
  const isValid = validateInput(inputValue, regex);

  if (isValid) {
    inputElement.classList.remove("error-color");
    updateElement.textContent = inputValue;
    errorElement.textContent = "";
  } else {
    inputElement.classList.add("error-color");
    errorElement.textContent = errorMsgText;
  }
}

function handleNumberOutput() {
  const inputValueN = cardNumberInput.value.trim();
  const isValid = validateInput(inputValueN, cardNumberRegex);

  if (isValid) {
    cardNumberInput.classList.remove("error-color");
    cardUpdate.textContent = inputValueN.replace(/(\d{4})(?!$)/g, "$1 ");
    cardError.textContent = "";
  } else {
    cardNumberInput.classList.add("error-color");
    cardError.textContent = numberErrorText;
  }
  finalNumber = Number(inputValueN);
}
function handleNameOutput() {
  handleOutput(
    cardNameInput,
    cardNameRegex,
    nameUpdate,
    nameError,
    nameErrorText
  );
  finalName = cardNameInput.value.trim();
}
function handleCvcOutput() {
  handleOutput(cardCvcInput, cardCvcRegex, cvcUpdate, cvcError, cvcErrorText);
  finalCvc = Number(cardCvcInput.value.trim());
}

function handleExpMonthOutput() {
  handleOutput(
    cardExpMonthInput,
    cardExpRegex,
    mmUpdate,
    expError,
    expErrorText
  );
  finalExpMonth = cardExpMonthInput.value.trim();
}

function handleExpYearOutput() {
  handleOutput(
    cardExpYearInput,
    cardExpYearRegex,
    yyUpdate,
    expError,
    expErrorText
  );
  finalExpYear = cardExpYearInput.value.trim();
}
cardNumberInput.addEventListener("keyup", handleNumberOutput);
cardNameInput.addEventListener("keyup", handleNameOutput);
cardCvcInput.addEventListener("keyup", handleCvcOutput);
cardExpMonthInput.addEventListener("keyup", handleExpMonthOutput);
cardExpYearInput.addEventListener("keyup", handleExpYearOutput);

form.addEventListener("submit", (e) => {
  const isNumberValid = validateInput(finalNumber, cardNumberRegex);
  console.log("isNumber:", isNumberValid);
  console.log("typeof", typeof finalNumber);
  console.log("Number:", `"${finalNumber}"`);
  const isNameValid = validateInput(finalName, cardNameRegex);
  console.log("isName:", isNameValid);
  console.log("Name:", `"${finalName}"`);
  const isCvcValid = validateInput(finalCvc, cardCvcRegex);
  console.log("isCVC:", isCvcValid);
  console.log("typeof", typeof finalCvc);
  console.log("CVC", `"${finalCvc}"`);
  const isMonthValid = validateInput(finalExpMonth, cardExpRegex);
  console.log("isMonth:", isMonthValid);
  console.log("Month:", finalExpMonth);
  const isYearValid = validateInput(finalExpYear, cardExpYearRegex);
  console.log("isYear:", isYearValid);
  console.log("Year:", finalExpYear);
  if (
    isCvcValid &&
    isNameValid &&
    isNumberValid &&
    isMonthValid &&
    isYearValid
  ) {
    e.preventDefault();
    console.log("form submit");
  } else {
    e.preventDefault();
    console.log("entered wrong values");
  }
});
