const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const desiredLength = parseInt(validationInput.getAttribute("data-length"));
  const currentLength = validationInput.value.length;

  if (currentLength === desiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
