// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = ["abcdefghijklmnopqrstuvwxyz"];
var specialCharacters = ["~!@#$%^&*()-"];
var count = 0;

(function passwordLength() {
  var pwLength = prompt(
    "Choose the length of your desired password. \n Between 8 to 128 characters"
  );
  pwLength = parseInt(pwLength);
  if (pwLength < 8 || 128 < pwLength || isNaN(pwLength)) {
    alert("That was an invalid entry. \n Please try again.");
    passwordLength();
  } else {
    customization(pwLength);
  }
})();

function customization(pwLength) {
  let lowerCase = confirm("Would you like to use lower case letters?");
  if (lowerCase == true) {
    count++;
  }
  let upperCase = confirm("Would you like to use upper case letters?");
  if (upperCase == true) {
    count++;
  }
  let numbers = confirm("Would you like to use numbers?");
  if (numbers == true) {
    count++;
  }
  let specialChar = confirm("Would you like to use special Characters?");
  if (specialChar == true) {
    count++;
  }
  if (count == 0) {
    alert("Please choose character customization options.");
    customization();
  } else {
    console.log("This is the count: " + count);
    generatePassword(pwLength);
  }
}

// var options = Math.floor(pwLength/count);
// console.log(options);
// var remainder = pwLength%count;
// console.log(remainder);
// var originalNum = (count * options) + remainder;
// console.log(originalNum);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
