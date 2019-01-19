/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */
const data = DATA.characters;
//console.log(data)
const containerRoot = document.getElementById('root');

let arrCharacter = [];

// CARD PARA VER PERSONAJES
 const showData = (data) => {
     let result = '';
     //console.log(data)
     data.forEach(element => {
         result = containerRoot.innerHTML += `
          <div class = "card" style = "width: 18rem;"> 
          <img class = "card-img-top" src = ${element.characterImageFull} alt = "Card image cap" >
          <div class = "card-body">
              <h5 class = "card-title"> ${element.characterName} </h5> 
              <p class = "card-text"> House: ${element.houseName} </p>
              </div>`
     });
     return result;
 }
 window.onload = showData(data);