function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
    //const { city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    //const description = `assets/photographers/${city}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
       
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const p = document.createElement('paragraph');
        const p2 = document.createElement('paragraph2');
        const p3 = document.createElement('paragraph3');
        const p4 = document.createElement('paragraph4');
        p.textContent = city;
        p2.textContent = country;
        p3.textContent = tagline;
        p4.textContent = price;
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
        return (article);
    }
    return { name, picture, city, country, tagline, price,  getUserCardDOM }
}