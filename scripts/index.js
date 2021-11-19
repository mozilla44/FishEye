/* create html card */

// TEST DU FOREACH 

fetch('../data.json')
.then(function (res) {
    return res.json()
})
.then(function (data) {
    let photographerData = data.photographers
    photographerData.forEach(photographer => {

        let tags = "";
        photographer.tags.forEach(tag =>{
            tags += `<li><a>#${tag}</a></li>`
        })
        
        document.getElementById("photographers_section").innerHTML +=`<div class="photographer_card">
    <a class="profile" href="pages/profiles.html?id=${photographer.id}">
        <img role="img" class="rounded_img" alt=""
            src="images/sample_photos/Photographers_ID_Photos/${photographer.portrait}">
    </a>
    <div class="photographer_info">
        <h2 class="photographer_name">${photographer.name}</h2>
        <div class="photographer_location"> 
            <h3 class="photographer_city">${photographer.city},&nbsp</h3>
            <h3 class="photographer_country">${photographer.country}</h3>
        </div>
        <p class="photographer_tagline">${photographer.tagline}</p>
        <p class="photographer_price">${photographer.price}€/jour</p>
    </div>
    <div class="card_tags">
        <ul class="tags_links">
        ${tags}
        </ul>
    </div>
</div>`

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










