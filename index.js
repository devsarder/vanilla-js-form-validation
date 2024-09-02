const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = validateInputs();
  try {
    // Check if all values are empty strings
    if (
      data.emailValue === "" &&
      data.password2Value === "" &&
      data.userNameValue === "" &&
      data.passwordValue === ""
    ) {
      throw new Error("Blank object cannot be sent!");
    } else {
      console.log(data);
    }
  } catch (error) {
    alert(`${error.message}`);
  }

  // Reset form values
  document.querySelector("#username").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#password2").value = "";
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validateInputs = () => {
  let userNameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();
  if (userNameValue === "") {
    setError(username, "User Name Is Required");
  } else {
    setSuccess(username);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (password.length < 8) {
    setError(password, "Password must be 8 char..");
  } else {
    setSuccess(password);
  }
  if (password2Value === "") {
    setError(password2, "Please Confirm Your Pass");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Password Does not match");
  } else {
    setSuccess(password2);
  }
  return {
    userNameValue,
    emailValue,
    passwordValue,
    password2Value,
  };
};
