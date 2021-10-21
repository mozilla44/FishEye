/* create html card */

// TEST DU FOREACH 

fetch('../data.json')
.then(function (res) {
    return res.json()
})
.then(function (data) {
    let photographerData = data.photographers
    photographerData.forEach(photographer => {

        //create new photographer card
        let newPhotographer = document.createElement("div");
        newPhotographer.classList.add("photographer_card");
        let section = document.getElementById("photographers_section");
        section.appendChild(newPhotographer);

        //create photogrpaher link (clicakble img)
        let photographerLink = document.createElement("a");
        photographerLink.classList.add("profile");
        newPhotographer.appendChild(photographerLink);

        //create profile picture
        let photographerImg = document.createElement("img");
        photographerImg.classList.add("rounded_img");
        photographerImg.setAttribute("src", "images/sample_photos/Photographers_ID_Photos/" + photographer.portrait)
        photographerLink.appendChild(photographerImg);

        //create photogrpaher info div
        let photographerInfo = document.createElement("div");
        photographerInfo.classList.add("photographer_info");
        newPhotographer.appendChild(photographerInfo);

        // create photographer name
        let photographerName = document.createElement("h2");
        photographerName.classList.add("photographer_name")
        photographerName.innerHTML = photographer.name;
        photographerInfo.appendChild(photographerName)

        //create photographer location div
        let photographerLocation = document.createElement("div")
        photographerLocation.classList.add("photographer_location");
        photographerInfo.appendChild(photographerLocation);

        //create photographer city
        let photographerCity = document.createElement("h3")
        photographerCity.classList.add("photographer_city")
        photographerCity.innerHTML = photographer.city + "," + "&nbsp";
        photographerLocation.appendChild(photographerCity);

        //create photographer country
        let photographerCountry = document.createElement("h3")
        photographerCountry.classList.add("photographer_country")
        photographerCountry.innerHTML = photographer.country;
        photographerLocation.appendChild(photographerCountry)

        //create photographer tagline
        let photographerTagline = document.createElement("p")
        photographerTagline.classList.add("photographer_tagline")
        photographerTagline.innerHTML = photographer.tagline;
        photographerInfo.appendChild(photographerTagline);

        //create photographer price
        let photographerPrice = document.createElement("p")
        photographerPrice.classList.add("photographer_price")
        photographerPrice.innerHTML = photographer.price + "€/jour";
        photographerInfo.appendChild(photographerPrice)

        //ID + TAG pour chaque photgrapher

    });
    })
.catch(function (err) {
    console.log(err)
})



class Photographer {
    constructor (data) {
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tags = data.tags;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
    }
    
    //fetch ici ? 

    createPhotographerCard (){
        // foreach ici ? 
    }
}










