// Assignment Code
let generateBtn = document.getElementById("generate")

// Write password to the #password input
function writePassword() {
  let password = generatePassword()
  let passwordText = document.getElementById("password")

  passwordText.value = password

}

// Add event listener to generate button
// Result text box
const passResult = document.getElementById('password')
// Character Length Choice
const charLength = document.getElementById('characters')
// Check Boxes variable
const lowerChoice = document.getElementById('lowercase')
const upperChoice = document.getElementById('uppercase')
const numberChoice = document.getElementById('number')
const symbolChoice = document.getElementById('symbol')
// Generate button variable
const generateElement = document.getElementById('generate')
// Randomizing array
const randomIzer = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}
// Clicking generate function
generateElement.addEventListener('click', function (){
  const length = +charLength.value;
  const hasLower = lowerChoice.checked;
  const hasUpper = upperChoice.checked;
  const hasNumber = numberChoice.checked;
  const hasSymbol = symbolChoice.checked;

  passResult.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
  console.log('ping')
})
// Generates randomized password
function generatePassword(lower, upper, number, symbol, length) {
  let result = ''
  const typesCount = lower + upper + number + symbol
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

  // If there isnt a selected type
  if(typesCount === 0) {
    return ''
  }

  // Loop for array
  for(let i = 0; i < length; i+=typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      result += randomIzer[funcName]()
    })
  }
  // Returns final password
  const finalPassword = result.slice(0, length)
  return finalPassword
}

// Randomizing logic
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber () {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol () {
  const symbols = '!@#$%^&*'
  return symbols[Math.floor(Math.random() * symbols.length)]
}





// Attempt #2
// function generatePassword() {
//   // 
//   let length = 12,
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*",
//     passValue = "";
//   for (let i = 0, n = charset.length; i < length; i++) {
//     passValue += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return passValue;
// }