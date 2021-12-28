function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    
    const picture = `assets/photographers/${portrait}`;
  

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const linkToPhotographerPage = document.createElement('a');
        const img = document.createElement( 'img' );
        
        const cityDom = document.createElement('span');
        const countryDom = document.createElement('span');
        const taglineDom = document.createElement('p');
        const priceDom = document.createElement('p');
        
        cityDom.setAttribute("class", "city");
        countryDom.setAttribute("class", "country");
        taglineDom.setAttribute("class", "tagline");
        priceDom.setAttribute("class", "price");
        linkToPhotographerPage.setAttribute("href", `photographer.html?id=${id}`);
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        cityDom.textContent = `${city}, ${country}` ;
        //countryDom.textContent = country;
        taglineDom.textContent = tagline;
        priceDom.textContent = `${price} €/jour`;
        article.appendChild(linkToPhotographerPage);
        linkToPhotographerPage.appendChild(img);
        article.appendChild(h2);
        article.appendChild(cityDom);
        article.appendChild(countryDom);
        article.appendChild(taglineDom);
        article.appendChild(priceDom);
       // a.setAttribute('href', `./photographer.html?id=${id}`);
        return (article);
    }
    return { name, picture, city, country, tagline, price, id,  getUserCardDOM }
}








//<a href="#" onclick="window.open('chemin_image');">photographer.html</a>
//<a href="la_page.html" target="Nom_Fenetre">Libellé du lien</a>

//document.getElementById('243').innerHTML = photographer.html;
//document.getElementById('img').addEventListener('click', function() {
//const id = document.getElementById('243').innerHTML = photographer.html
//openModal();
/*
function openModal() {
    const modalSuccess = document.getElementById('img');
    modalSuccess.style.display = "block";
    
}
*/
//document.getElementById("img").innerHTML = photographer.html;
