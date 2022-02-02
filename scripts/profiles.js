let searchParam = (new URL(window.location).searchParams)

let id = searchParam.get("id");
console.log(id);
let diapo = null


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
      document.getElementById("contact_btn").classList.add("hidden");

    })
    document.getElementById("close_modal_btn").addEventListener("click", (x) => {
      document.querySelector(".bground").classList.remove("active");
      document.getElementById("contact_btn").classList.remove("hidden");
    })

    let listMedia = [];


    findMedia.forEach(m => {

      let media = new MediaFactory(m, photographer.name);
      listMedia.push(media);

    });

    displayMedia(listMedia)
    diapo = new Diaporama(listMedia, "#diaporama");



    //sort media
    document.querySelector(".sorting select").addEventListener('change', (e) => {

      if (e.target.value == "Popularité") {
        listMedia.sort((a, b) => b.likes - a.likes)
      }
      if (e.target.value == "Date") {
        listMedia.sort((a, b) => new Date(b.date) - new Date(a.date))
      }
      if (e.target.value == "Titre") {
        listMedia.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) { 
            return 1;
          }
        })
      }
      displayMedia(listMedia)

    });
  })


  .catch(function (err) {
    console.log(err)
  })


function displayMedia(listMedia) {

  document.querySelector(".photographer_gallery").innerHTML = "";

  for (let media of listMedia) {
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
  }
  document.querySelectorAll(".photographer_gallery .gallery_item img").forEach(item => {
    item.addEventListener("click", (e) => {
      diapo.show(e.currentTarget.closest(".gallery_item").dataset.id)
    })
  })

}







