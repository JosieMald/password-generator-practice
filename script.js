// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = ["abcdefghijklmnopqrstuvwxyz"];
var specialCharacters = ["~!@#$%^&*()-"];
var alerts = ["Would you like to use lower case letters?","Would you like to use upper case letters?", "Would you like to use numbers?", "Would you like to use special Characters?" ];
var options = [];
var count = 0;

// var answer = Math.floor(77/example);
// console.log(answer);
// var answer2 = 77%example;
// console.log(answer2);
// var originalNum = (example * answer) + answer2;
// console.log(originalNum);

// (function passwordLength() {
//   var pwLength = prompt(
//     "Choose the length of your desired password. \n Between 8 to 128 characters"
//   );
//   pwLength = parseInt(pwLength);
//   // var answer = typeof pwLength
//   // console.log(answer)

//   if (pwLength < 8 || 128 < pwLength || isNaN(pwLength)) {
//     alert("That was an invalid entry. \n Please try again.");
//     passwordLength();
//   } else {
//     generatePassword(pwLength);
//   }
// })();

function generatePassword(pwLength) {
  

  // let lowerCase = confirm("Would you like to use lower case letters?");
  // if (lowerCase == true) {
  //   count++;
  // }
  // let upperCase = confirm("Would you like to use upper case letters?");
  // if (upperCase == true) {
  //   count++;
  // }
  // let numbers = confirm("Would you like to use numbers?");
  // if (numbers == true) {
  //   count++;
  // }
  // let specialChar = confirm("Would you like to use special Characters?");
  // if (specialChar == true) {
  //   count++;
  // }
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
