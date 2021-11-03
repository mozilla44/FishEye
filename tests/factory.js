class Bottle {
    constructor(color, brand, contenance) {
        this.color = color
        this.brand = brand
        this.contenance = contenance
    }

    drink() {
        console.log(`Je bois de l'eau de chez ${this.brand} qui contient ${this.contenance}`)
    }
}


const BottleOfEvian = new Bottle('blue', 'evian', 100)
const BottleOfPerrier = new Bottle('white', 'perrier', 200)


BottleOfEvian.drink()
BottleOfPerrier.drink()