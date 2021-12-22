let searchParam = (new URL(window.location).searchParams)

let id = searchParam.get("id");
console.log(id);



fetch('../data.json')
.then(function (res) {
    return res.json()
})
.then(function (data) {

    let photographer =  new Photographer(data.photographers.find(p => p.id == id));
    
    let findMedia = data.media.filter(media =>  media.photographerId  == id);

    document.querySelector(".photographer_presentation").innerHTML = photographer.createPhotographerHeader()
    document.getElementById("contact_btn").addEventListener("click", (e)=>{
        document.querySelector(".bground").classList.add("active");
      }) 
    document.getElementById("close_modal_btn").addEventListener("click", (x)=> {
        document.querySelector(".bground").classList.remove("active")
    } )
      

    findMedia.forEach(m => {

    let media = new MediaFactory(m , photographer.name);
    document.querySelector(".photographer_gallery").innerHTML += media.createMedia();

});
})
.catch(function (err) {
    console.log(err)
})

// add event on heart icon 

const gallery = document.querySelector(".photographer_gallery");

gallery.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-heart')) {
      alert("")
    }
  });



 