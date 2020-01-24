// Assignment Code
let generateBtn = document.getElementById("generate")

// Write password to the #password input
function writePassword() {
  let password = generatePassword()
  let passwordText = document.getElementById("password")

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


//Generates Password
function generatePassword() {
  // 
  let length = 12,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*",
    passValue = "";
  for (letr i = 0, n = charset.length; i < length; ++i) {
    passValue += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}