// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var special = "#$%&()*+,-./:;<=>?";
  var numbers = "0123456789";
  var choice = "";
  
  var input = parseInt(prompt("Enter a length between 8 and 128 characters."));
  // Password lenth & Invalid message
  if (input >= 8 && input <= 128) {
  } else {
    alert("INVALID ENTRY! Try Again. Enter a length between 8 and 128 characters.");
  }

  // Enter Good Code Here
  // Question:lowercase
  var lowercase = confirm ("Would you like to use lowercase letter?");
  if (lowercase) {
    choice += lowercase
  }

   // Question:lowercase
   var uppercase = confirm ("Would you like to use uppercase letter?");
   if (uppercase) {
     choice += uppercase
   }

   // Question: Special Characters
   var special = confirm ("Would you like to use special characters?");
   if (special) {
     choice += special
   }

   // Question: Special Characters
   var numbers = confirm ("Would you like to use special characters?");
   if (numbers) {
     choice += numbers
   }

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);