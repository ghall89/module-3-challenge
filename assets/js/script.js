// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = [];

// Write password to the #password input
function writePassword() {

  var passLength = length();
  characters = chooseCharacters();

  var password = generatePassword(passLength, characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// ask for password length and check to make sure it meets requirements
var length = function () {
  var getLength = false;

  while (!getLength) {
    getLength = prompt("How long should the password be? Type a number between 8 and 128.")

    if (getLength <= 128 && getLength >= 8) {
      return getLength;
    } else {
      alert("Please enter a number between 8 and 128!");
      getLength = false;
    }
  }
}

// generate a password with the number of characters defined in length
var generatePassword = function (length, characters) {

  var generatedPass = "";

  for (i = 0; i < length; i++) {
    var random = Math.round(Math.random() * (characters.length - 1) + 1);
    var character = characters[random - 1];
    generatedPass = generatedPass + character;
  }

  console.log(generatedPass);
  return generatedPass;

}

// choose characters used in password
var chooseCharacters = function () {
  var validChoice = false;

  var chosenCharacters = [];


  while (!validChoice) {
    var chooseUpper = confirm("Do you want to use uppercase letters?");
    var chooseLower = confirm("Do you want to use lowercase letters?");
    var chooseNum = confirm("Do you want to use numbers?")
    var chooseSpecial = confirm("Do you want to use special characters?");



    if (chooseUpper) {
      chosenCharacters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }
    if (chooseLower) {
      chosenCharacters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
    if (chooseUpper) {
      chosenCharacters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    }
    if (chooseSpecial) {
      chosenCharacters.push("?", "!", "*", "(", ")", "@", "#", "$", "&", "_", "[", "]", ".", "+", "=");
    }
    if (!chooseUpper && !chooseLower && !chooseNum && !chooseSpecial) {
      alert("You must choose at lease one option.");
    }
    if (chooseUpper || chooseLower || chooseNum || chooseSpecial) {
      validChoice = true;
    }
  }

  console.log(chosenCharacters);

  return chosenCharacters;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);