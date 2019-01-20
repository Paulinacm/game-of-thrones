/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */
const data = DATA.characters;
//console.log(data)
const containerRoot = document.querySelector('#root .row');

let arrCharacter = [];

// CARD PARA VER PERSONAJES
 const showData = (data) => {
     let result = '';
     //console.log(data)
     data.forEach(element => {
         result = containerRoot.innerHTML += `
         <div class="col-6 col-md-2">
          <div class="card w-100 mb-3 p-0"> 
          <img class="card-img-top" src = ${element.characterImageFull} alt = "${element.characterName}" >
          <div class="card-body">
              <h5 class="card-title"> ${element.characterName} </h5> 
              <p class="card-text"> House: ${element.houseName} </p>
              </div></div>`
     });
     return result;
 }
 window.onload = showData(data);