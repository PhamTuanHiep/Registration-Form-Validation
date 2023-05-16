const btnSubmit = document.querySelector("#form-submit");

const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password_confirm");

let userNameValue = "";
let emailValue = "";
let passwordValue = "";
let passwordConfirmValue = "";

let validUserName = false;
let validEmail = false;
let validEPass = false;
let validPassConfirm = false;
var isValid = false;

userName.onchange = function () {
  userNameValue = userName.value;
  if (userNameValue == "") {
    setError(userName, "User Name cannot be blank");
    validUserName = false;
  } else if (!isUserName(userNameValue)) {
    setError(userName, "Invalid UserName");
    validUserName = false;
  } else {
    setSuccess(userName);
    validUserName = true;
  }
  validate();
};

email.onchange = function () {
  emailValue = email.value;
  if (emailValue == "") {
    setError(email, "Email cannot be blank");
    validEmail = false;
  } else if (!isEmail(emailValue)) {
    setError(email, "Invalid email");
    validEmail = false;
  } else {
    setSuccess(email);
    validEmail = true;
  }
  validate();
};

password.onchange = function () {
  passwordValue = password.value;
  if (passwordValue == "") {
    setError(password, "password cannot be blank");
    validEPass = false;
  } else if (!isPassword(passwordValue)) {
    setError(password, "Invalid password");
    validEPass = false;
  } else {
    setSuccess(password);
    validEPass = true;
  }
  validate();
};

passwordConfirm.onchange = function () {
  passwordConfirmValue = passwordConfirm.value;
  if (passwordConfirmValue == "") {
    setError(passwordConfirm, "password confirm cannot be blank");
    validPassConfirm = false;
  } else if (!(passwordConfirmValue === passwordValue)) {
    setError(passwordConfirm, "Invalid password confirm");
    validPassConfirm = false;
  } else {
    setSuccess(passwordConfirm);
    validPassConfirm = true;
  }
  validate();
};

function getParent(element, selector) {
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    } else {
      element = element.parentElement;
    }
  }
}

function setError(ele, message) {
  let parentEle = getParent(ele, ".form-group");
  parentEle.classList.remove("success");
  parentEle.classList.add("error");
  parentEle.querySelector(".form-message").innerText = message;
}
function setSuccess(ele) {
  let parentEle = getParent(ele, ".form-group");
  parentEle.classList.remove("error");
  parentEle.classList.add("success");
  parentEle.querySelector(".form-message").innerText = "";
}

function isUserName(value) {
  let regex = /\b[a-zA-Z]+\b$/gm;
  return regex.test(value);
}
function isEmail(value) {
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
}
function isPassword(value) {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/g;
  return regex.test(value);
}
function validate() {
  if (validUserName && validEmail && validEPass && validPassConfirm) {
    isValid = true;
    btnSubmit.disabled = false;
    btnSubmit.classList.remove("disabled");
  } else {
    btnSubmit.disabled = true;
    btnSubmit.classList.add("disabled");
  }
  console.log("hello");
}
console.log("hi");
btnSubmit.onclick = function (e) {
  e.preventDefault();
  if (isValid) {
    alert("Register success !");
  }
};
