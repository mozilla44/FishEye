class MediaVideo {
    constructor (data , name) {
        Object.assign(this , data);
        this.name = name.split(" ")[0].replace("-" , "_");

    }

    createMedia () {
        return `<div class="gallery_item lightbox" data-id="${this.id}">
        <div class="lightbox_preview">
            <video role="video" alt="${this.alt}" class="roundedCorner_img">
            <source src="../images/sample_photos/${this.name}/${this.video}">
            </video>
                
            <div class="preview_info">
                <p class="img_title">${this.title}</p>
                <p class="number_likes">${this.likes}</p>
                <i class="fas fa-heart heart_icon"></i>
            </div>
        </div>
        <button class="previous" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
        <button class="next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
        <button class="close_lightbox" aria-label="close dialog"><i class="fas fa-times"></i></button>
    </div>`
    }

    createMediaLightbox(){
        return `<video role="video" alt="${this.alt}" class="roundedCorner_img" controls>
        <source src="../images/sample_photos/${this.name}/${this.video}">
        </video>`
        
    }
    
}

VarDate