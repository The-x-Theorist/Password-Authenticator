// Selected elements
const strength = document.querySelector(".password__strength");
const verify = document.querySelector(".password__verify");
const placeHolder = document.querySelector(".result__placeholder");

// Selected input box
const inputBox = document.querySelector(".input");

// Method for getting input
const getInput = function () {
  return {
    input: document.querySelector(".input").value,
  };
};

// Method for converting the input into an Array
const pushInput = function () {
  const inputs = getInput().input.split("");

  return inputs;
};

// Space bar alert Method
const space = function () {
  verify.innerHTML = `your password shouldn't include a space in between 😐`;
};

// Less charcter alert method
const lessChar = function () {
  strength.innerHTML = `your password should contain atleast 8 charcters 😬`;
};

// Good number of charcter alert Method
const goodChar = function () {
  strength.innerHTML = `your password length is good 😄`;
};

// Perfect number of charcter alert method
const perfectChar = function () {
  strength.innerHTML = `your password length is just perfect 😋`;
};

// Too long charcters alert method
const tooLong = function () {
  strength.innerHTML = `your password length is too long 😒`;
};

// Special symbol included alert Method
const specialSymbl = function () {
  verify.innerHTML = `your password is highly secured ☺️`;
};

// Special symbol should be included alert method
const includeSymbl = function () {
  verify.innerHTML = `your passwors should include a special charcter and a number 😔`;
};

// The Event Listener.
inputBox.addEventListener("keyup", function (e) {
  const pushInpt = pushInput();

  // When number of charcters is more than or equal to 8
  if (pushInpt.length >= 8) {
    strength.style.display = `block`;
    goodChar();
  }

  // When number of charcter is less than or equal to 7
  if (pushInpt.length <= 7) {
    strength.style.display = `block`;
    lessChar();
  }

  // When number of charcter is more the or equal to 12 charcters
  if (pushInpt.length >= 12) {
    strength.style.display = `block`;
    perfectChar();
  }

  // When number of charcters is more than 15
  if (pushInpt.length > 15) {
    strength.style.display = `block`;
    tooLong();
  }

  // When special charcter and a number is included
  if (
    (pushInpt.includes("!") ||
      pushInpt.includes("@") ||
      pushInpt.includes("#") ||
      pushInpt.includes("$") ||
      pushInpt.includes("%") ||
      pushInpt.includes("^") ||
      pushInpt.includes("&") ||
      pushInpt.includes("*") ||
      pushInpt.includes("_") ||
      pushInpt.includes("-")) &&
    (pushInpt.includes("0") ||
      pushInpt.includes("1") ||
      pushInpt.includes("2") ||
      pushInpt.includes("3") ||
      pushInpt.includes("4") ||
      pushInpt.includes("5") ||
      pushInpt.includes("6") ||
      pushInpt.includes("7") ||
      pushInpt.includes("8") ||
      pushInpt.includes("9"))
  ) {
    verify.style.display = `block`;
    specialSymbl();
  }
  // When special charcter or number or both are not included
  else {
    verify.style.display = `block`;
    includeSymbl();
  }

  // When space is include in between
  if (e.keyCode == 32 && pushInpt.includes(" ")) {
    inputBox.style.border = `1px solid red`;
    space();
  }

  // When space is not included
  if (e.keyCode == 8 && !pushInpt.includes(" ")) {
    inputBox.style.border = `none`;
  }

  // When length is zero palceholder is displayed
  if (e.keyCode !== 8 && pushInpt.length !== 0) {
    placeHolder.style.display = `none`;
  }

  // When length is equal to 0
  if (pushInpt.length == 0) {
    placeHolder.style.display = `block`;
    strength.style.display = `none`;
    verify.style.display = `none`;
  }
});

// The Initializer.
const init = function () {
  inputBox.value = "";
};
init();
