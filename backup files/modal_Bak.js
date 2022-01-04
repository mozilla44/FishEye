












/* document.getElementById("contact_btn").addEventListener("click", (e)=>{
  document.querySelector(".bground").classList.add ("active");
})  */





/* const modalForm = (profile) => {

  let bground = document.createElement("section")
  bground.classList.add("bground")
  bground.setAttribute("id" , "close_modal_btn")
  bground.innerHTML = ` <i class="fas fa-times" id="close_modal_btn"></i>
  <div class="modal_content">
      <form name="form" id="contact_form" class="form" action="" onsubmit="return validateContact()">
          <h1 class="contact_name">Contactez-moi</h1>
          <h2 class="modal_photographer_name">Mimi Keel</h2>
          <div class="formData" id="input_first">
              <p class="input_name">Prénom</p>
              <label for="first"></label>
              <input class="text-control" type="text" id="first" name="first" minlength="2">
              <p id="errorFirst" class="errorMesage"></p>
              <div class="formData" id="input_last">
                  <p class="input_name">Nom</p>
                  <label for="last"></label>
                  <input class="text-control" type="text" id="last" name="last">
                  <p id="errorLast" class="errorMesage"></p>
              </div>
              <div class="formData" id="input_email">
                  <p class="input_name">email</p>
                  <label for="email"></label>
                  <input class="text-control" type="" id="email" name="email" placeholder="adresse@email.com">
                  <p id="errorEmail" class="errorMesage"></p>
              </div>
              <div class="formData" id="input_message">
                  <p class="input_name">Votre message</p>
                  <label for="message"></label>
                  <input class="text-control" type="text" id="form_message" name="message"
                      aria-label="Your message"></input>
                  <p id="errorFormMesage" class="errorMesage"></p>
              </div>
              <div id="send_btn">
                  <input class="btn btn_primary" id="contact-submit-btn" type="submit" role="button" aria-label="Send"
                      value="Envoyer" onclick="validateContact()">
              </div>
          </div>
      </form>
  </div>`
  let main = document.getElementById("main");
  main.appendChild(bground)
  
  

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


  





  





} */

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
