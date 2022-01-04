class Photographer {
    constructor (data, media = null) {
        Object.assign(this , data)
        this.media = media
    }
    
    createPhotographerCard (){
        
    return `<div class="photographer_card">
    <a class="profile" href="pages/profiles.html?id=${this.id}">
        <img role="img" class="rounded_img" alt=""
            src="images/sample_photos/Photographers_ID_Photos/${this.portrait}">
    </a>
    <div class="photographer_info">
        <h2 class="photographer_name">${this.name}</h2>
        <div class="photographer_location"> 
            <h3 class="photographer_city">${this.city},&nbsp</h3>
            <h3 class="photographer_country">${this.country}</h3>
        </div>
        <p class="photographer_tagline">${this.tagline}</p>
        <p class="photographer_price">${this.price}€/jour</p>
    </div>
    <div class="card_tags">
        <ul class="tags_links">
        ${this.createPhotographerTags()}
        </ul>
    </div>
</div>`

}
    createPhotographerTags (){
        let tags = "";
        this.tags.forEach(tag =>{
            tags += `<li><a>#${tag}</a></li>`
        });
        return tags;
    }

    createPhotographerHeader () {
        return `<div class="photographer_details">
            <h1 class="photographer_name">${this.name}</h1>
            <div class="photographer_info">
                <div class="photographer_location">
                <h3 class="photographer_city">${this.city},&nbsp</h3>
                <h3 class="photographer_country">${this.country}</h3>
                </div>
                <p class="photographer_tagline">${this.tagline}</p>
            </div>
            <div class="profile_tags">
                <ul class="tags_links">
                    <li><a>#Portrait</a></li>
                    <li><a>#Events</a></li>
                    <li><a>#Animals</a></li>
                </ul>
            </div>
        </div>
        <button class="btn btn_secondary" id="contact_btn" aria-label="Contact me">Contactez-moi</button>
        <div class="profile_picture">
            <img role="img" alt="Photo de profil de ${this.name}"
                src="/images/sample_photos/Photographers_ID_Photos/${this.portrait}" class="rounded_img profile_pic">
        </div>`
    }

    createPhotographerBottom (){
        return `<div class="bottom-bar">
        <div class="likes_hearts">
        <p id="bottom-likes">${this.getNumberLikes()}</p>
        <i class="fas fa-heart heart_icon bottom_heart"></i>
        </div>
        <p id="botom-price">${this.price} €/jour</p>
     </div>`
    }

    getNumberLikes (){
      return this.media.map(media => media.likes).reduce((total ,like) => total+like);
    }
}
