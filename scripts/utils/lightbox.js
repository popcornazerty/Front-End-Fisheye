function displayModal() {
    document.querySelector('#chevron-open').addEventListener('click', () => {
        let openLightBox = document.getElementsById('open-lightbox');
        openLightBox.style.display = 'block';
    })
}

function closeModal() {
    document.querySelector('#chevron-close').addEventListener('click', () => {
        let openLightBox = document.getElementsById('open-lightbox');
        openLightBox.style.display = 'none';
    })
}