function photographerFactory(data) {
    const { name, portrait } = data;
    const { city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    //const description = `assets/photographers/${city}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
       
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const city = document.createElement('city');
        city.textContent = city;
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(city);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}