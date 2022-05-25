// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var choice = "";
  var finalPassword = "";

  var input = parseInt(prompt("Enter a length between 8 and 128 characters."));
  // Password lenth & Invalid message
  if (input >= 8 && input <= 128) {
  } else {
    alert("INVALID ENTRY! Try Again. Enter a length between 8 and 128 characters.");
    return "";
  }

  // Enter Good Code Here
  // Question:lowercase
  var lowercaseQ = confirm("Would you like to use any lowercase letters?");
  if (lowercaseQ) {
    choice += lowercase
  }

  // Question:lowercase
  var uppercaseQ = confirm("Would you like to use any uppercase letters?");
  if (uppercaseQ) {
    choice += uppercase
  }

  // Question: Numbers
  var numbersQ = confirm("Would you like to use any numbers?");
  if (numbersQ) {
    choice += numbers
  }

  // Question: Special Characters
  var specialQ = confirm("Would you like to use any special characters?");
  if (specialQ) {
    choice += special
  }

  // Enter final password
  for (var i = 0; i < input; i++) {
    finalPassword += choice.charAt(Math.floor(Math.random() * choice.length));
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);