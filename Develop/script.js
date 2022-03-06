// Assignment code here
// global variables 
var passLength = 0;
var lowercases = false;
var uppercases = false;
var numerics = false;
var specialchars = false;

var lengthSelect = function() {
  var lengthprompt = window.prompt("Type your password length. It must be between 8 and 128.");
  // Store value to check
  var parse = parseInt(lengthprompt);
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

var caseSelect = function() {
  var lowCasePrompt = window.confirm("Would you like your password to include lower case letters?");
  lowercases = lowCasePrompt;
  var upperCasePrompt = window.confirm("Would you like your password to include upper case letters?");
  uppercases = upperCasePrompt;
}

var generatePassword = function() {
  lengthSelect();
  caseSelect();
  console.log("Length: " + passLength + ". Lower cases: " + lowercases + ". Upper cases: " + uppercases);
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
