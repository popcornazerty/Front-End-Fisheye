'use strict';
/////////////////////////////////////////
/*
import utilsFactories from '../Factories/.js';

export default class DropDownMenu {
    // Events, open/close the dropDownMenu
    dropDown(data) {
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'block';
            });
            this.sortMedias(data);
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
    }

    // SORT MEDIAS (POPULARITY, DATA, TITLE)
    sortMedias(data) {
        let mediaArraySort = [];
        let media = data.media;
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortBtn = Array.from(document.getElementsByClassName('sort'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            hiddenSort[0].style.display = "none";
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;

                mediaArraySort = media.sort((a, b) => { // SORT BY POPULARITY  
                    return b.likes - a.likes
                })

            } else if (index == 1) {
                btnSort.innerHTML = `Date`;

                mediaArraySort = media.sort((a, b) => { // SORT BY DATE 
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;

                mediaArraySort = media.sort((a, b) => { // SORT BY TITLE
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
                        return -1;
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
                        return 1;
                    }
                })
            }
            this.displaySortMedia(mediaArraySort);
        }));
    }

    displaySortMedia(mediaArraySort) {
        // DISPLAY PHOTOGRAPHERS WORKS WITH SORT
        document.getElementById("ph-works").innerHTML = "";
        new GalleryFactory().builder(mediaArraySort);
    }
}
*/
let isOpen = false;

 const selectOptions = document.querySelector("#select-block-options");
 
 const firstButtonText = document.querySelector("#select-first-option-text");
 
 const optionsButtons = selectOptions.querySelectorAll("button");

document.querySelector("#select-first-option").addEventListener("click", ()=>{
				if(isOpen === false){
         
             // On ouvre le faux select
             
             selectOptions.style.display = "block";
             
             isOpen = true;
             
             return handleButtonsOptions();
        
        }
        
        if(isOpen === true){
        
        		 return closeSelect();
        
        }

});


function closeSelect(){

		 // On ferme le faux select
             
     selectOptions.style.display = "none";
     
      return isOpen = false;
             

}

function handleButtonsOptions(){

     optionsButtons.forEach((button)=>{
        
              button.onclick = ()=>{
              
                  const buttonText = button.textContent;
                    
                  button.innerHTML = firstButtonText.textContent;
                    
                  firstButtonText.innerHTML = buttonText;         
                    
                  return closeSelect();
        
              };
        
        });


}
