/* listen for changes in form inputs */
document.getElementById("first").addEventListener("change" , validateContact);
document.getElementById("last").addEventListener("change" , validateContact)
document.getElementById("email").addEventListener("change", validateContact)
document.getElementById("form_message").addEventListener("change" , validateContact)
document.getElementById("contact-submit-btn").addEventListener("onclick" , validateContact)

/* contact form validsation  */
function validateContact() {
  let regexName = /^\S\D{2,}$/;
  let regexEmail = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
  let regexMessage = /(.*[a-z]){3}/i;
  let testFirst = regexName.test(document.getElementById("first").value);
  let testLast = regexName.test(document.getElementById("last").value);
  let testEmail = regexEmail.test(document.getElementById("email").value);
  let testMessage = regexMessage.test(document.getElementById("form_message").value);

  if (testFirst == false) {
    document.getElementById("errorFirst").innerHTML = "Veuillez entrer un prénom valide";
    document.getElementById("first").style.border = "2px solid red";
  }
  else { document.getElementById("errorFirst").style.display = "none"; document.getElementById("first").style.border = "2px solid green"; }
  if (testLast == false) {
    document.getElementById("errorLast").innerHTML = "veuillez entrer un nom valide";
    document.getElementById("last").style.border = "2px solid red";
  }
  else {
    document.getElementById("errorLast").style.display = "none", document.getElementById("last").style.border = "2px solid green"
  }
  if (testEmail == false) {
    document.getElementById("errorEmail").innerHTML = "veuillez entrer une adresse email valide"
    document.getElementById("email").style.border = "2px solid red"
  }
  else {
    document.getElementById("errorEmail").style.display = "none", document.getElementById("form_message").style.border = "2px solid green"
  }
  if (testMessage == false) {
    document.getElementById("errorFormMesage").innerHTML = "veuillez entrer au moins 2 caractères"
    document.getElementById("form_message").style.border = "2px solid red"
  }
  else {
    document.getElementById("errorFormMesage").style.display = "none", document.getElementById("form_message").style.border = "2px solid green"
  }
  if (testFirst == false || testLast == false || testEmail == false || testMessage == false){
    return false
  }

}

/* laucnh modal */

let launchModalBtn = document.getElementById("contact_btn");
launchModalBtn.addEventListener("click" , launchModal)


function launchModal (){
  let modalBody = document.getElementById("modal");
  modalBody.style.display = "flex";
  
}

/* close modal  */
let closeBtn = document.getElementById("close_modal_btn");
closeBtn.addEventListener("click" , logTest);
let modalBody = document.getElementById("modal");

function logTest() {
  modalBody.style.display = "none";
  console.log("log test");
  

}
