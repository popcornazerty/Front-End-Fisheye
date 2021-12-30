//Mettre le code JavaScript lié à la page photographer.html
document.addEventListener("DOMContentLoaded", ()=>{
    const photographerId = new URLSearchParams(window.location.search).get('id');
    const photographers =[
        {
            "name": "Mimi Keel",
            "id": 243,
            "city": "London",
            "country": "UK",
            "tagline": "Voir le beau dans le quotidien",
            "price": 400,
            "portrait": "MimiKeel.jpg"
        },
        {
            "name": "Ellie-Rose Wilkens",
            "id": 930,
            "city": "Paris",
            "country": "France",
            "tagline": "Capturer des compositions complexes",
            "price": 250,
            "portrait": "EllieRoseWilkens.jpg"
        },
        {
            "name": "Tracy Galindo",
            "id": 82,
            "city": "Montreal",
            "country": "Canada",
            "tagline": "Photographe freelance",
            "price": 500,
            "portrait": "TracyGalindo.jpg"
        },
        {
            "name": "Nabeel Bradford",
            "id": 527,
            "city": "Mexico City",
            "country": "Mexico",
            "tagline": "Toujours aller de l'avant",
            "price": 350,
            "portrait": "NabeelBradford.jpg"
        },
        {
            "name": "Rhode Dubois",
            "id": 925,
            "city": "Barcelona",
            "country": "Spain",
            "tagline": "Je crée des souvenirs",
            "price": 275,
            "portrait": "RhodeDubois.jpg"
        },
        {
            "name": "Marcel Nikolic",
            "id": 195,
            "city": "Berlin",
            "country": "Germany",
            "tagline": "Toujours à la recherche de LA photo",
            "price": 300,
            "portrait": "MarcelNikolic.jpg"
        }
    ];

    const photographerInfo = photographers.filter((photographer)=>{

         return Number(photographer.id) === Number(photographerId);

    });

    //console.log(photographerInfo);

    const divPhotographerPage = document.getElementById("photographer_page");
    //console.log(divPhotographerPage);
    //console.log(photographerInfo.length);

    photographerInfo.forEach(
        photographer => {
            console.log(photographer.city);
            console.log(photographer.id);

            const spanCity = document.createElement("span");
            spanCity.innerHTML = photographer.city;
            divPhotographerPage.appendChild(spanCity);

            const spanCountry = document.createElement("span");
            spanCountry.innerHTML = photographer.country;
            divPhotographerPage.appendChild(spanCountry);
        }

    );



    //console.log(divPhotographerPage);

    


    /*let photographerId = ["195", "925", "527", "82", "930" , "243"];
    photographerId.forEach(id) => {
        console.log(id);
        if (id === "photographerInfo") {
            console.log(id)
        }
    });*/


    

});