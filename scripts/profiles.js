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

    findMedia.forEach(m => {

    let media = new MediaFactory(m , photographer.name);
    document.querySelector(".photographer_gallery").innerHTML += media.createMedia();

});
})
.catch(function (err) {
    console.log(err)
})





 