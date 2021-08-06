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
}



function createPhotographerCard (){
    for (let i = 0; i < photographers.length; i++){
    let photographer = document.createElement('a');
        let  = document.createElement('header');
        let  = document.createElement('div');
        let  = document.createElement('section');
        let  = document.createElement('ul');
        let  = document.createElement('img');
        let  = document.createElement('h2');
        let  = document.createElement('p');
        let = document.createElement('p');
        let = document.createElement('p');
    }
        
}

    
fetch('/data.json')
.then(res => res.json())
.then((data) => {
    const photographers = data.photographers

    console.log("====")
    console.log(photographers)
    console.log("====")

    for (let i = 0; i < photographers.length; i++) {
        const Photographers = new Photographer(photographers[i])

        console.log(Photographers)
    }

})
.catch(function(err) {
    console.log(err)
})


fetch('/data.json')
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        console.log(err)
    })