
class Diaporama {
    constructor(listMedia, selector) {
        this.listMedia = listMedia;
        this.current = null;
        this.element = document.querySelector(selector);
        this.prepareEvent();
    }

    show(id) {
        this.current = this.listMedia.find((media) => media.id == id);
        document.querySelector("#diaporama").classList.add("show")
        this.display();
    }


    add(image) {
        this.listMedia.push(image)
    }



    next() {
        for (let i = 0; i < this.listMedia.length; i++) {
            if (this.listMedia[i] == this.current) {
                if (i + 1 == this.listMedia.length) {
                    this.current = this.listMedia[0];
                }
                else {
                    this.current = this.listMedia[++i];
                }

                break;
            }
        }
        this.display();

    }

    previous() {
        for (let i = 0; i < this.listMedia.length; i++) {
            if (this.listMedia[i] == this.current) {
                if (i == 0) {
                    this.current = this.listMedia[this.listMedia.length - 1];
                }
                else {
                    this.current = this.listMedia[--i];
                }

                break;
            }
        }
        this.display();
    }

    prepareEvent() {
        document.querySelector(".close-lightbox").addEventListener("click", () => {
            document.querySelector("#diaporama").classList.remove("show");
        })

        document.addEventListener('keydown', function (e) {
            if (e.key == "Escape") {
                document.querySelector("#diaporama").classList.remove("show");
            }
        });

        this.element.querySelector(".previous_lightbox").addEventListener("click", () => {
            this.previous();
        })

        this.element.querySelector(".next_lightbox").addEventListener("click", () => {
            this.next();
        })

    }

    display() {
        document.querySelector("#mediacontainer").innerHTML = this.current.createMediaLightbox();
    }

}


