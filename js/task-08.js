const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formObject = {};

  formData.forEach((value, name) => {
    formObject[name] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert("All fields must be filled out.");
  } else {
    console.log(formObject);
    loginForm.reset();
  }
});
