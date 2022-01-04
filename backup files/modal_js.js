/* document.querySelector('#contact_form input[type = "submit"]').addEventListener("click" ,(e)=>{
e.preventDefault();
let isValid = document.querySelector('#contact_form input[name = "first"]').reportValidity(); 
if (isValid){
  console.log("champs valide") 
}
else {
    console.log("champs invalide")
    document.getElementById("first").style.border = "3px solid red"
  }
 
}); */


/* document.querySelector('#contact_form input[type = "submit"]').addEventListener("click" ,(e)=>{
  e.preventDefault();
  let isValid = document.querySelector('#contact_form input[name = "first"]').checkValidity(); 
  if (isValid){
    console.log("champs valide")
  }
  else {
    console.log("champs invalide")
    document.getElementById("first").style.border = "3px solid red"
  }
  }); */


/* document.querySelector('#contact_form input[type = "submit"]').addEventListener("click" ,(e)=>{
  e.preventDefault();
  document.querySelector('#contact_form input[name = "first"]').setCustomValidity("c'est un test")
  let isValid = document.querySelector('#contact_form input[name = "first"]').reportValidity(); 
  
  }); */
  document.querySelector('#contact_form input[type = "submit"]').addEventListener("click" ,(e)=>{
    e.preventDefault();
    /* document.querySelector('#contact_form input[name = "first"]').setCustomValidity("c'est un test"); */
    let isValid = document.querySelector('#contact_form').reportValidity();
    if (isValid){
      
    }
    
  });