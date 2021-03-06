// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // store the function in a variable
  var passwordText = document.querySelector("#password"); // select the password id that is text area
  passwordText.value = password; // the returned value from the generatePassword function is stored in passwordText.value
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Prompt user to enter the correct length for the pass word
  var length = prompt(
    "Please enter the length for you Password. Password should be 8 to 128 characters"
  );
  // length of at least 8 characters and no more than 128 characters
  if (length < 8 || length > 128) {
    alert("Must be a number from 8 to 128");
    generatePassword();
  }
  var gotLower = confirm("Does this password include lower case letters?");
  var gotUpper = confirm("Does this password include upper case letters?");
  var gotSymbol = confirm("Does this password include symbols");
  var gotNumbers = confirm("Does this password include numbers");
  // verify criteria for password
  if (
    gotLower === false ||
    gotUpper === false ||
    gotSymbol === false ||
    gotNumbers === false
  ) {
    alert(
      "Hint Password must include:\n" +
        "at least one lowercase character\n" +
        "at least one uppercase character\n" +
        "at least one numeric value\n" +
        "at least one special character\n" +
        "Please try again"
    );
    generatePassword();
  } else {
    // Define the criteria for random password.
    const criteria =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]|<>0123456789";
    // create variable to return back to the calling function
    var yourPassword = " ";
    for (var i = 0; i < length; i++) {
      // create a temporary storage variable for random characters that returned at for loop
      var randomCriteria = criteria.charAt(
        Math.floor(Math.random() * criteria.length)
      );
      yourPassword += randomCriteria;
    }

    // return the generated password back to the function
    return yourPassword;
  }
}
