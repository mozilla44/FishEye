/* create html card */

// TEST DU FOREACH 

fetch('../data.json')
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        let photographerData = data.photographers
        photographerData.forEach(photographer => {
            console.log(photographer.name)
            
            let newDiv = document.createElement("div");
            newDiv.classList.add("testclass");
            let section = document.getElementById("photographers_section")
            section.appendChild(newDiv);
            newDiv.innerHTML = photographer.name;
            
           

        });
    })
    .catch(function(err) {
        console.log(err)
    })







/* test avec fetch */
     
/* fetch('../data.json')
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data.photographers)
        let names = document.getElementsByClassName('photographer_name');
        let cities = document.getElementsByClassName("photographer_city");
        let countries = document.getElementsByClassName("photographer_country");
        let taglines = document.getElementsByClassName("photographer_tagline");
        let prices = document.getElementsByClassName("photographer_price")
        //let profilePic = document.getElementsByClassName("rounded_img")

        for (let i = 0; i < names.length; i++) {
            names[i].innerHTML = data.photographers[i].name;
            cities[i].innerHTML = data.photographers[i].city +",";
            countries[i].innerHTML = "&nbsp" + data.photographers[i].country;
            taglines[i].innerHTML = data.photographers[i].tagline;
            prices[i].innerHTML = data.photographers[i].price + ("€/jour");
            // profilePic[i].setAttribute("src" "") 
        }
       

    })
    .catch(function(err) {
        console.log(err)
    }) */


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








