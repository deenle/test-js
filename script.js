const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
let isPal = true;

function cleanInputString(str) {
  //Regex for sanitizing string
  //const regex = /[a-z]/g;
  const regex = /[A-Za-z0-9]/g;
  return str.toLowerCase().match(regex);
}

function isPalindrome() {
  const cleanedString = cleanInputString(inputText.value);
  //logic for palindrome
  console.log(`Checking ${cleanedString} ...`);
  for (let i = 0; i < cleanedString.length; i++) {
    if (cleanedString[i] !== cleanedString[cleanedString.length - i - 1]) {
      isPal = false;
      printResult(inputText.value);
      console.log("false...")
      return;
    }
  }  
  console.log("outside for loop")
  isPal = true;
  printResult(inputText.value);
}

function printResult(str) {
  resultText.innerText = "";
  let resultTextString = isPal ? 
    `<strong>${str}</strong> is a palindrome` : 
    `<strong>${str}</strong> is not a palindrome`;
  resultText.innerHTML = `
    <p>${resultTextString}</p>
    `;
  resultText.classList.remove("hidden");
}

function wordCheck() {
  if (inputText.value === "") {
    alert("Please input a value");
    return;
  }
  isPalindrome();
  console.log(`word checked! - ${inputText.value}`);
}

checkButton.addEventListener('click', wordCheck);