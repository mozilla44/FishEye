let searchParam = (new URL(window.location).searchParams)

let id = searchParam.get("id");
console.log(id);



fetch('../data.json')
  .then(function (res) {
    return res.json()
  })
  .then(function (data) {



    let findMedia = data.media.filter(media => media.photographerId == id);
    let photographer = new Photographer(data.photographers.find(p => p.id == id), findMedia);

    document.querySelector("footer").innerHTML = photographer.createPhotographerBottom()

    document.querySelector(".photographer_presentation").innerHTML = photographer.createPhotographerHeader()
    document.getElementById("contact_btn").addEventListener("click", (e) => {
      document.querySelector(".bground").classList.add("active");
    })
    document.getElementById("close_modal_btn").addEventListener("click", (x) => {
      document.querySelector(".bground").classList.remove("active")
    })

    let listMedia = [];


    findMedia.forEach(m => {

      let media = new MediaFactory(m, photographer.name);
      listMedia.push(media)
      document.querySelector(".photographer_gallery").innerHTML += media.createMedia();

      document.querySelectorAll(".gallery_item .fa-heart").forEach(heart => {
        heart.addEventListener('click', function (e) {
          if (e.currentTarget.classList.contains('fa-heart')) {
            let likes = e.currentTarget.closest(".preview_info").querySelector(".number_likes");
            console.log(likes.innerHTML)
            likes.innerHTML = parseInt(likes.innerHTML) + 1;
            let totalLikes = document.querySelector("#bottom-likes")
            totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + 1;
          }
        });
      })

      var diapo = new Diaporama(listMedia ,"#diaporama");
      
      document.querySelectorAll(".photographer_gallery .gallery_item").forEach(item => {
        item.addEventListener("click" , (e) =>{
          diapo.show(e.currentTarget.dataset.id)
        })
      }) 

    });
  })
  .catch(function (err) {
    console.log(err)
  })

// add event on heart icon 






