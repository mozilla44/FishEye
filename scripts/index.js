fetch('../data.json')
.then(function (res) {
    return res.json()
})
.then(function (data) {
    data.photographers.forEach(photographerJSON => {

        let photographer = new Photographer(photographerJSON);
        document.getElementById("photographers_section").innerHTML += photographer.createPhotographerCard();

});
})
.catch(function (err) {
    console.log(err)
})












