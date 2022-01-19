
class Diaporama {
    constructor(listMedia, selector){
        this.listMedia = listMedia;
        this.current = null;
        this.element = document.querySelector(selector)
        this.prepareEvent()
    }

    show(id){
        let findMedia = this.listMedia.find((media) => media.id == id );
        document.querySelector("#mediacontainer").innerHTML = findMedia.createMediaLightbox();
        document.querySelector("#diaporama").classList.add("show")
    }

    
    add(image){
        this.listMedia.push(image)
    }

    play(){
        this.current = this.listMedia[0];

    }

    next(){
        for(let i=0 ; i<this.listMedia.lenght; i++){
            if (this.listMedia[i] == this.current){
                this.current = this.listMedia[++i];
                break;
            }
        }
    }

    previous(){
        for(let i=0 ; i<this.listMedia.lenght; i++){
            if (this.listMedia[i] == this.current){
                this.current = this.listMedia[--i];
                break;
            }
        }
    }

    prepareEvent (){
    document.querySelector(".close-lightbox").addEventListener("click" , () => {
    document.querySelector("#diaporama").classList.remove("show");
    })
}
    }
