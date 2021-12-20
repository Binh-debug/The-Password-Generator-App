const displayPassword = document.querySelector(".display-password");
let lengthRange = document.querySelector("#length-range");
let lengthNumber = document.querySelector("#length-number");
const number = document.querySelector("#number");
const symbols = document.querySelector("#symbols");
const uppercase = document.querySelector("#uppercase");
const btnGeneratorPassword = document.querySelector("#btn-generate");

// Get length of password
lengthNumber.addEventListener("input", function () {
  lengthRange.value = lengthNumber.value;
});
lengthRange.addEventListener("change", function () {
  lengthNumber.value = lengthRange.value;
});

//Function Generator Array contain code ASCII
function generateCodeArray(codeBegin, codeEnd) {
  let arr = [];
  for (let i = codeBegin; i <= codeEnd; i++) {
    arr.push(i);
  }
  return arr;
}
let codeAscLowercase = generateCodeArray(97, 122); // default
let codeAscNumber = generateCodeArray(48, 57); // code asc of number
let codeAscSymbol = generateCodeArray(33, 47) // code asc of special character
  .concat(generateCodeArray(58, 64))
  .concat(generateCodeArray(91, 96))
  .concat(generateCodeArray(123, 253));
let codeAscUppercase = generateCodeArray(65, 90); // code asc of uppercase character

// Function Generator Password optional
// let resetUnit = [...codeAscLowercase];
function generatorPassword(lengthPassword, number, symbol, uppercase) {
  let codeAsc = codeAscLowercase;
  if (number) {
    codeAsc = codeAsc.concat(codeAscNumber);
  }
  if (symbol) {
    codeAsc = codeAsc.concat(codeAscSymbol);
  }
  if (uppercase) {
    codeAsc = codeAsc.concat(codeAscUppercase);
  }
  // codeAscLowercase = randomArr(codeAscLowercase);
  let codeAscPassword = [];
  for (let j = 0; j < lengthNumber.value; j++) {
    let charCode = codeAsc[Math.floor(Math.random() * codeAsc.length)];
    codeAscPassword.push(String.fromCharCode(charCode));
  }
  return codeAscPassword.join("");

  // codeAscLowercase = resetUnit; // gia tri
}

// Function Random Arr
// function randomArr(arr) {
//   return arr.sort(function () {
//     return 0.5 - Math.random();
//   });
// }

// Button Generator  Password
btnGeneratorPassword.addEventListener("click", function (e) {
  e.preventDefault();
  let checkNumber = number.checked;
  let checkSymbols = symbols.checked;
  let checkUppercase = uppercase.checked;
  let password = generatorPassword(
    lengthNumber.value,
    checkNumber,
    checkSymbols,
    checkUppercase
  );
  displayPassword.innerText = password;
});
