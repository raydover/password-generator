// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var choice = "";

  var input = parseInt(prompt("Enter a length between 8 and 128 characters."));
  // Password lenth & Invalid message
  if (input >= 8 && input <= 128) {
  } else {
    alert("INVALID ENTRY! Try Again. Enter a length between 8 and 128 characters.");
    return generatePassword();
  }

  // Enter Good Code Here
  // Question:lowercase
  var lowercase = confirm("Would you like to use any lowercase letters?");
  if (lowercase) {
    choice += lowercase
  }

  // Question:lowercase
  var uppercase = confirm("Would you like to use any uppercase letters?");
  if (uppercase) {
    choice += uppercase
  }

  // Question: Numbers
  var numbers = confirm("Would you like to use any numbers?");
  if (numbers) {
    choice += numbers
  }

  // Question: Special Characters
  var special = confirm("Would you like to use any special characters?");
  if (special) {
    choice += special
  }

  // Enter final password
  var finalPassword = "";
  console.log(choice);
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