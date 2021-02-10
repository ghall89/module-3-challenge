// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var pswdLength = length();
  console.log(pswdLength);
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


}

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



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
