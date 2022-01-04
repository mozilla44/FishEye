/* validate form using validate API */
document.querySelector('#contact_form input[type = "submit"]').addEventListener("click" ,(e)=>{
  e.preventDefault();
  let isValid = document.getElementById("contact_form").reportValidity(); 
});