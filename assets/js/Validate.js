const btnSubmit = document.querySelector("#form-submit");
const popup = document.getElementById("popup");

var isValid = false;

var input = [
  (inputUserName = {
    element: document.getElementById("username"),
    message1: "User Name cannot be blank",
    message2: "Invalid UserName",
    isValid: false,
    Valid: function (value) {
      regex =
        /^([a-zỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ']+)((\s{1}[a-zỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ']+)*$)/gi;
      return regex.test(value);
    },
  }),
  (inputEmail = {
    element: document.getElementById("email"),
    message1: "Email cannot be blank",
    message2: "Invalid email",
    isValid: false,
    Valid: function (value) {
      let regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(value);
    },
  }),
  (inputPass = {
    element: document.getElementById("password"),
    message1: "password cannot be blank",
    message2: "Invalid password",
    isValid: false,
    Valid: function (value) {
      let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/g;
      let passConfValue = input[3].element.value || "";
      if (passConfValue != "") {
        Validation(input[3]);
        if (passConfValue !== value) {
          this.message2 = "password and password verification do not match";
        }
        return regex.test(value) && passConfValue === value;
      } else {
        return regex.test(value);
      }
    },
  }),
  (inputPassConfirm = {
    element: document.getElementById("password_confirm"),
    message1: "password confirm cannot be blank",
    message2: "password and password verification do not match",
    isValid: false,
    Valid: function (value) {
      console.log(input[2].element.value);
      return value === input[2].element.value;
    },
  }),
];
input[0].element.onchange = function () {
  Validation(input[0]);
  isValidation();
};
input[1].element.onchange = function () {
  Validation(input[1]);
  isValidation();
};
input[2].element.onchange = function () {
  Validation(input[2]);
  isValidation();
};

input[3].element.onchange = function () {
  Validation(input[3]);
  Validation(input[2]);
  isValidation();
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
function Validation(obj) {
  if (obj.element.value == "") {
    setError(obj.element, obj.message1);
    obj.isValid = false;
  } else if (!obj.Valid(obj.element.value)) {
    setError(obj.element, obj.message2);
    obj.isValid = false;
  } else {
    setSuccess(obj.element);
    obj.isValid = true;
  }
  isValidation();
}

function isValidation() {
  let validUserName = input[0].isValid;
  let validEmail = input[1].isValid;
  let validEPass = input[2].isValid;
  let validPassConfirm = input[3].isValid;

  if (validUserName && validEmail && validEPass && validPassConfirm) {
    isValid = true;
    btnSubmit.disabled = false;
    btnSubmit.classList.remove("disabled");
  } else {
    isValid = false;
    btnSubmit.disabled = true;
    popup.classList.remove("show");
    btnSubmit.classList.add("disabled");
  }
}

btnSubmit.onclick = function (e) {
  e.preventDefault();
  if (isValid) {
    popup.classList.add("show");
  } else {
    btnSubmit.disabled = true;
    btnSubmit.classList.add("disabled");
  }
};
