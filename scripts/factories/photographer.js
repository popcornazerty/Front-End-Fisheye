function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
    
    const picture = `assets/photographers/${portrait}`;
  

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
       
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const cityDom = document.createElement('span');
        const countryDom = document.createElement('span');
        const taglineDom = document.createElement('p');
        const priceDom = document.createElement('p');
        cityDom.setAttribute("class", "city");
        countryDom.setAttribute("class", "country");
        taglineDom.setAttribute("class", "tagline");
        priceDom.setAttribute("class", "price");
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        cityDom.textContent = city;
        countryDom.textContent = country;
        taglineDom.textContent = tagline;
        priceDom.textContent = `${price} €/jour`;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(cityDom);
        article.appendChild(countryDom);
        article.appendChild(taglineDom);
        article.appendChild(priceDom);
        return (article);
    }
    return { name, picture, city, country, tagline, price,  getUserCardDOM }
}