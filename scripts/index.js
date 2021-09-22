
/* test sans fetch  */

/* function populateTest (){
    let names = document.getElementsByClassName('photographer_name');
    let locations = document.getElementsByClassName("photographer_location");
    for (let i = 0; i < names.length; i++) {
        names[i].innerHTML = "John Doe";
    }
    for (let i = 0; i < locations.length; i++) {
        locations[i].innerHTML = "London, UK";
    }
} */

/* test avec fetch */
     
fetch('../data.json')
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data.photographers)
        let names = document.getElementsByClassName('photographer_name');
        for (let i = 0; i < names.length; i++) {
            names[i].innerHTML = data.photographers;
        }
    })
    .catch(function(err) {
        console.log(err)
    })


/* class Photographer {
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

    function createPhotographerCard (){
        for (let i = 0; i < photographers.length; i++){
        let photographer = document.createElement('a');
            let name = document.createElement('h2');
            let id = document.createElement('p');
            let  = document.createElement('p');
            let  = document.createElement('p');
            let  = document.createElement('img');
            let  = document.createElement('p');
        }
}
} */



/* function createPhotographerCard (){
    for (let i = 0; i < photographers.length; i++){
    let photographer = document.createElement('a');
        let name = document.createElement('h2');
        let id = document.createElement('p');
        let  = document.createElement('p');
        let  = document.createElement('p');
        let  = document.createElement('img');
        let  = document.createElement('p');
    }
        
} */








