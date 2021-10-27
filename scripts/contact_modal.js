
//modal in poo

const modalForm = (profile) => {

  // create html map

  let bground = document.createElement("section")
  bground.classList.add("bground")
  bground.setAttribute("id" , "close_modal_btn")
  let main = document.getElementById("main");
  main.appendChild(bground)
  
  let closeIcon  = document.createElement("i")
  closeIcon.classList.add("fas" , "fa-times")
  closeIcon.setAttribute("id" , "close_modal_btn")
  bground.appendChild(closeIcon)

  let modalContent = document.createElement("div")
  modalContent.classList.add("modal_content");
  bground.appendChild(modalContent)

  let formBody = document.createElement("form")
  formBody.setAttribute("name" , "form")
  formBody.setAttribute("id", "contact_form")
  formBody.setAttribute("class", "form")

  let contactMe = document.createElement("h1")
  contactMe.classList.add("contact_name")
  contactMe.innerHTML = "Contactez-moi"
  formBody.appendChild(contactMe)

  let profileName = document.createElement("h2")
  profileName.classList.add("modal_photographer_name")
  profileName.innerHTML = profile.name
  formBody.appendChild(profileName)

  //First name field

  let firstName = document.createElement("div")
  firstName.classList.add("FormData")
  firstName.setAttribute("id","input_first")
  formBody.appendChild(firstName)

  let inputFirstName = document.createElement("p")
  inputFirstName.classList.add("input_name")
  inputFirstName.innerHTML = "Prénom"
  firstFirstName.appendChild(inputFirstName)

  let firstLabel = document.createElement("label")
  firstLabel.setAttribute("for","first")
  firstName.appendChild(firstLabel)

  let firstInput = document.createElement("input")
  firstInput.classList.add("text_control")
  firstInput.setAttribute("type","text")
  firstInput.setAttribute("id" , "first")
  firstInput.setAttribute("name" ,"first")
  firstInput.setAttribute("minlength", "2")
  firstName.setAttribute(firstInput)

  let errorFirst = document.createElement("p")
  errorFirst.classList.add("errorMesage")
  errorFirst.setAttribute("id", "errorFirst")

  //last name field

  let inputLast = document.createElement("div")
  inputLast.classList.add("formData")
  inputLast.setAttribute("id" ,"input_last")
  firstName.appendChild(inputLast)

  let inputLastName = document.createElement("p")
  inputLastName.classList.add("input_name")
  inputLastName.innerHTML = "Nom"
  inputLast.appendChild(inputLastName)

  let lastLabel = document.createElement("label")
  lastLabel.setAttribute("for" , "last")
  inputLast.appendChild(lastLabel)

  let lastNameInput = document.createElement("input")
  lastNameInput.classList.add("text-control")
  lastNameInput.setAttribute("type", "text")
  lastNameInput.setAttribute("id", "last")
  lastNameInput.setAttribute("name", "last")
  inputLast.appendChild(lastNameInput)

  let errorLast = document.createElement("p")
  errorLast.classList.add("errorMesage")
  errorLast.setAttribute("id", "errorLast")
  inputLast.appendChild(errorLast)

  // email field

  let inputEmail = document.createElement("div")
  inputEmail.classList.add("formData")
  inputEmail.setAttribute("id","input_email")
  firstName.appendChild(inputEmail)

  let emailFieldName = document.createElement("p")
  emailFieldName.classList.add("input_name")
  emailFieldName.innerHTML = "email"
  inputEmail.appendChild(emailFieldName)

  let emailLabel = document.createElement("label")
  emailLabel.setAttribute("for" , "email")
  inputEmail.appendChild(emailLabel)

  let emailInput = document.createElement('input')
  emailInput.classList.add("text-control")
  emailInput.setAttribute("id" , "email")
  emailInput.setAttribute("name" , "email")
  emailInput.setAttribute("placeholder", "adresse@email.com")
  inputEmail.appendChild(emailInput)

  let emailError = document.createElement("p")
  emailError.classList.add("errorMesage")
  emailError.setAttribute("id" , "errorEmail")
  inputEmail.appendChild(emailError)

  //your mesage field

  let inputMssg = document.createElement("div")
  inputMssg.classList.add("formData")
  inputMssg.setAttribute("id","input_message")
  firstName.appendChild(inputMssg)

  let mssgFieldName = document.createElement("p")
  mssgFieldName.classList.add("input_name")
  mssgFieldName.innerHTML = "Votre message"
  inputMssg.appendChild(mssgFieldName)

  let mssgLabel = document.createElement("label")
  mssgLabel.setAttribute("for" , "message")
  inputMssg.appendChild(mssgLabel)

  let mssgInput = document.createElement('input')
  mssgInput.classList.add("text-control")
  mssgInput.setAttribute("type" ,"text")
  mssgInput.setAttribute("id" , "form_message")
  mssgInput.setAttribute("name" , "message")
  mssgInput.setAttribute("aria-label", "Your message")
  inputMssg.appendChild(mssgInput)

  let mssgError = document.createElement("p")
  mssgError.classList.add("errorMesage")
  mssgError.setAttribute("id" , "errorMessage")
  inputMssg.appendChild(mssglError)


  //event listeners
  document.getElementById("first").addEventListener("change" , validateContact);
  document.getElementById("last").addEventListener("change" , validateContact)
  document.getElementById("email").addEventListener("change", validateContact)
  document.getElementById("form_message").addEventListener("change" , validateContact)
  document.getElementById("contact-submit-btn").addEventListener("onclick" , validateContact)

  //create REgex
  let regexName = /^\S\D{2,}$/;
  let regexEmail = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
  let regexMessage = /(.*[a-z]){3}/i;
  let testFirst = regexName.test(document.getElementById("first").value);
  let testLast = regexName.test(document.getElementById("last").value);
  let testEmail = regexEmail.test(document.getElementById("email").value);
  let testMessage = regexMessage.test(document.getElementById("form_message").value);
  
//validation function

function validateContact() {
  
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

// laucnh modal 

let launchModalBtn = document.getElementById("contact_btn");
launchModalBtn.addEventListener("click" , launchModal)


function launchModal (){
  let modalBody = document.getElementById("modal");
  modalBody.style.display = "flex";
}

// close modal  
let closeBtn = document.getElementById("close_modal_btn");
closeBtn.addEventListener("click" , logTest);
let modalBody = document.getElementById("modal");

function logTest() {
  modalBody.style.display = "none";
  console.log("log test");

}


  





  





}

/* // listen for changes in form inputs 
document.getElementById("first").addEventListener("change" , validateContact);
document.getElementById("last").addEventListener("change" , validateContact)
document.getElementById("email").addEventListener("change", validateContact)
document.getElementById("form_message").addEventListener("change" , validateContact)
document.getElementById("contact-submit-btn").addEventListener("onclick" , validateContact)

// contact form validsation  
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

// laucnh modal 

let launchModalBtn = document.getElementById("contact_btn");
launchModalBtn.addEventListener("click" , launchModal)


function launchModal (){
  let modalBody = document.getElementById("modal");
  modalBody.style.display = "flex";
  
}

// close modal  
let closeBtn = document.getElementById("close_modal_btn");
closeBtn.addEventListener("click" , logTest);
let modalBody = document.getElementById("modal");

function logTest() {
  modalBody.style.display = "none";
  console.log("log test");
  

} */
