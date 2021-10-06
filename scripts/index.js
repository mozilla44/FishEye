/* create html card */

// TEST DU FOREACH 

fetch('../data.json')
.then(function (res) {
    return res.json()
})
.then(function (data) {
    let photographerData = data.photographers
    photographerData.forEach(photographer => {

        console.log(photographer.name)

        //create divs 
        let newDiv = document.createElement("div");
        let newdiv2 = document.createElement("div")

        //add class to creted divs
        newDiv.classList.add("testclass");
        newdiv2.classList.add("testclas2")

        //add innerHTML to created divs
        newDiv.innerHTML = photographer.name;
        newdiv2.innerHTML = photographer.city;

        //append div1 to main section
        let section = document.getElementById("photographers_section")
        section.appendChild(newDiv);

        //append div2 to div1 (casse la boucle)
        let div1 = document.getElementsByClassName(".testclass")
        div1.appendChild(newdiv2) //casse la boucle  
        //section.appendChild(newdiv2) // fonctionne mais pas ce que je veux faire 
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
}









