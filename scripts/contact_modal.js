/* validate form using validate API */
document.querySelector('#contact_form input[type = "submit"]').addEventListener("click" ,(e)=>{
  e.preventDefault();
  let isValid = document.getElementById("contact_form").reportValidity();
  let firstInput = document.getElementById("first");
  let lastinput = document.getElementById("last");
  let emailinput = document.getElementById("email");
  let mssgInput = document.getElementById("form_message");
  console.log(firstInput.value,lastinput.value,emailinput.value,mssgInput.value)
});

