// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var input = parseInt(prompt("Enter a length between 8 and 128 characters"));
  // Password lenth & Invalid message
  if (input >= 8 && input <= 128) {
  } else {
    alert("INVALID ENTRY! Try Again.");
  }
  // Enter Good Code Here
  // Question:lowercase
  var lowercase = confirm ("Would you like to use lowercase letter?");
  if (lowercase) {
    possible += lowercase
  }





  return "Enter a length between 8 and 128 characters";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);