class Photographer {
    constructor (data) {
        this.id = data.id;
        this.name = data.name
        this.price = data.price
        this.toto = data.toto
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
        let = document.createElement('p')
    }
        
}

/* Méthode à la papa
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
*/

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


class Bottle {
    constructor(color, brand, contenance) {
        this.color = color
        this.brand = brand
        this.contenance = contenance
    }

    drink() {
        console.log(`Je bois de l'eau de chez ${this.brand}`)
    }
}


const BottleOfEvian = new Bottle('blue', 'evian', 100)
const BottleOfPerrier = new Bottle('white', 'perrier', 200)


BottleOfEvian.drink()
BottleOfPerrier.drink()
