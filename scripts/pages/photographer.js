//Mettre le code JavaScript lié à la page photographer.html
document.addEventListener("DOMContentLoaded", ()=>{
    const photographerId = new URLSearchParams(window.location.search).get('id');

    console.log(photographerId)
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
            "name": "Ellie Rose Wilkens",
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

    // Premiere etape on va recuperer les informations du photographe

    const {name, city, country, tagline, portrait} = photographerInfo[0];
    console.log(name);


    const divPhotographerPage = document.getElementById("photographer_header");
    const h2 = document.createElement( 'h2' );
    h2.textContent = `${photographer.name}`;
    divPhotographerPage.appendChild(h2);
  

    //test gallery lightbox
   

    //console.log(photographerInfo);

    // const divPhotographerPage = document.getElementById("photographer_page");
    // //console.log(divPhotographerPage);
    // //console.log(photographerInfo.length);

    // photographerInfo.forEach(
    //     photographer => {
    //         console.log(photographer.city);
    //         console.log(photographer.id);

    //         const h2 = document.createElement( 'h2' );
    //         h2.textContent = `${photographer.name}`;
    //         divPhotographerPage.appendChild(h2);
           
    //         const spanCity = document.createElement("span");
    //         spanCity.innerHTML = photographer.city;
    //         divPhotographerPage.appendChild(spanCity);

    //         const spanCountry = document.createElement("span");
    //         spanCountry.innerHTML = photographer.country;
    //         divPhotographerPage.appendChild(spanCountry);

    //         const spanTagline = document.createElement("span");
    //         spanTagline.innerHTML = photographer.tagline;
    //         divPhotographerPage.appendChild(spanTagline);

    //         const imgPortrait = document.createElement("img");
    //         const portrait = `assets/photographers/${photographer.portrait}`;
    //         imgPortrait.setAttribute("src", portrait);
    //         imgPortrait.setAttribute("alt", 'Portrait du photographe');
    //         imgPortrait.setAttribute("class", "photographer_portrait");
    //         divPhotographerPage.appendChild(imgPortrait);

    //         const spanblock = document.createElement("class");


    //         /*const samplePhoto = document.createElement("img");
    //         const portrait = `assets/sample photos/${photographer.portrait}`;
    //         imgPortrait.setAttribute("src", portrait);
    //         imgPortrait.setAttribute("alt", 'Portrait du photographe');
    //         imgPortrait.setAttribute("class", "photographer_portrait");
    //         divPhotographerPage.appendChild(imgPortrait);*/

    //         // Etape 1: Sauvegarder le nom et prénom du photographe
    //         const currentName = photographer.name;

    //         // Etape 2: Créér un tableau des noms de répertoire
    //         const folderName = [
    //             "Ellie rose",
    //             "Marcel",
    //             "Mimi",
    //             "Nabeel",
    //             "Rhode",
    //             "Tracy"
    //         ];

    //         console.log(currentName);
    //         let floderPath = "";
    //         const result = currentName.indexOf(folderName);
    //         console.log(result);

    //         // Etape 3: Parcourir le tableau de répertoire
    //         folderName.forEach(folder => {
    //             // Etape 4: Vérifier que le nom du répertoire correspond à un nom de photographe
    //             if (currentName.includes(folder)) {
    //                 // Le folder correspond au nom u photographe
    //                 floderPath = folder;
    //             } else {
    //                 console.log("else");
    //             }
    //         });

    //         console.log(floderPath);

    //     }

    // );



    //console.log(divPhotographerPage);

    


    /*let photographerId = ["195", "925", "527", "82", 
    
    "930" , "243"];
    photographerId.forEach(id) => {
        console.log(id);
        if (id === "photographerInfo") {
            console.log(id)
        }
    });*/


});