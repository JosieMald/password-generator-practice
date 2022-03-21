// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "~!@#$%^&*()-";
var count = 0;
var randomPassword = [];

function passwordLength() {
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
};

function customization(pwLength) {
  let lowerCase = confirm("Would you like to use lower case letters?");
  if (lowerCase == true) {
    count++;
  }
  let upperCase = confirm("Would you like to use upper case letters?");
  if (upperCase == true) {
    count++;
  }
  let num = confirm("Would you like to use numbers?");
  if (num == true) {
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
    generatePassword(pwLength, lowerCase, upperCase, num, specialChar);
  }
}

function generatePassword(pwLength, lowerCase, upperCase, num, specialChar) {
  var letter = letters.split("");
  var specialCharacter = specialCharacters.split("");
  var options = Math.floor(pwLength / count);
  console.log("this is the pwlength: " + pwLength);
  console.log("This is the options: " + options);
  var remainder = pwLength % count;
  console.log("This is the remainder: " + remainder);
  var originalNum = count * options + remainder;
  console.log("This is count * options + remainder: " + originalNum);
  console.log("this is the length: " + letters.length);
  if (lowerCase == true) {
    for (var i = 0; i < options; i++) {
      let x = Math.floor(Math.random() * letter.length);
      randomPassword.push(letter[x]);
    }
  }
  if (upperCase == true) {
    for (var i = 0; i < options; i++) {
      let x = Math.floor(Math.random() * letter.length);
      randomPassword.push(letter[x].toUpperCase());
    }
  }
  if (num == true) {
    for (var i = 0; i < options; i++) {
      let x = Math.floor(Math.random() * numbers.length);
      randomPassword.push(numbers[x]);
    }
  }
  if (specialChar == true) {
    for (var i = 0; i < options; i++) {
      let x = Math.floor(Math.random() * specialCharacter.length);
      randomPassword.push(specialCharacter[x]);
      // console.log(specialCharacter[x]);
    }
    console.log(randomPassword);
  }
  if (remainder != 0) {
    for (var i = 0; i < remainder; i++) {
      let x = Math.floor(Math.random() * randomPassword.length);
      randomPassword.push(randomPassword[x]);
      passwordShuffle();
    }
  } else {
    passwordShuffle();
  }
}

function passwordShuffle() {
  console.log("This is the password before the shuffle: " + randomPassword);
  for (var i = 0; i < randomPassword.length; i++) {
    let x = Math.floor(Math.random() * randomPassword.length);
    [randomPassword[i], randomPassword[x]] = [randomPassword[x], randomPassword[i]];
    console.log("-----------------------------------------------");
  }
  console.log("This is the password after: " + randomPassword);
  console.log(randomPassword.length);
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = randomPassword;
}

// Write password to the #password input
function writePassword() {
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordLength);
