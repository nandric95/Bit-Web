function validationForm() {
  var form = document.getElementsByTagName("form");

  var input = form.getElementsByTagName("input");
  var isValid = true;

  for (var i = 0; i < input.length; i++) {
    if (input.hasAttribute("required") && input.value === "") {
      input.style.border = "#0519db";
      isValid = false;
    }
  }
}

validationForm();

function isInputEmpty(input) {
  var form = document.getElementsByTagName("form");

  var input = form.getElementsByTagName("input");
  return !input.value && !input.validity.badInput;
}

isInputEmpty;
