// Assignment Code
var generateBtn = document.querySelector("#generate");

characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4","5", "6", "7", "8", "9", "0", "?", "!", "*", "(", ")", "@", "#", "$", "&"];

// Write password to the #password input
function writePassword() {

  var passLength = length();

  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// ask for password length and check to make sure it meets requirements
var length = function() {
  var getLength = false;
  
  while(!getLength) {
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
var generatePassword = function(length) {

  var generatedPass = "";
  var character;

  for (i = 0; i < length; i++) {
    var random = Math.round(Math.random()*(characters.length-1) + 1);
    console.log(random);
    character = characters[random-1];
    generatedPass = generatedPass + character;
  }
  console.log(generatedPass);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
