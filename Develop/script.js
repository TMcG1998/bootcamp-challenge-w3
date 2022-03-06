// Assignment code here
// global variables 
var passLength = 0;
var lowercases = false;
var uppercases = false;
var numerics = false;
var specialchars = false;

var lowerCaseArray = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericArray = '0123456789';
var specialCharArray = '!@#$%^&*()';

// Select the desired length of the password
var lengthSelect = function() {
  // Check to make sure the length hasn't already been set
  if(passLength == 0) {
    var lengthPrompt = window.prompt("Type your password length. It must be between 8 and 128.");
  // Store value to check
    var parse = parseInt(lengthPrompt);
    var intCheck = Number.isInteger(parse);
  // Make sure the value is an integer to compare and is a valid length
    if(intCheck && (parse >= 8) && (parse <= 128)) {
        window.alert("Your password will be " + parse + " characters long.");
        passLength = parse;
          // Continue running code 
    } else {
        window.alert("Please enter a valid integer between 8 and 128.")
        lengthSelect();
    }
  }
}

var caseSelect = function() {
  var lowCasePrompt = window.confirm("Would you like your password to include lower case letters?");
  lowercases = lowCasePrompt;
  var upperCasePrompt = window.confirm("Would you like your password to include upper case letters?");
  uppercases = upperCasePrompt;
  var numericPrompt = window.confirm("Would you like your password to include numeric values?");
  numerics = numericPrompt;
  var specialPrompt = window.confirm("Would you like your password to contain special characters?");
  specialchars = specialPrompt;
}

var generatePassword = function() {
  lengthSelect();
  caseSelect();
  // check that at least one value is true
    if(lowercases || uppercases || numerics || specialchars) {
      var conditions = [];
      var pass = '';
      if(lowercases) {
        conditions.push(lowerCaseArray);
      }
      if(uppercases) {
        conditions.push(upperCaseArray);
      }
      if(numerics) {
        conditions.push(numericArray);
      }
      if(specialchars) {
        conditions.push(specialCharArray);
      }
      for(i = 0; i < passLength; i++) {
        var newCharArrayNum = Math.floor(Math.random() * conditions.length);
        var newCharArray = conditions[newCharArrayNum];
        pass += newCharArray[Math.floor(Math.random() * newCharArray.length)];
      }
      return pass;
    } else {
      window.alert("You must select at least one value.");
      generatePassword();
    }
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
