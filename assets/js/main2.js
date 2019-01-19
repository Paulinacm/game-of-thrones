/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */
const data = DATA.characters;
const dataep = EPISODES.episodes;
//console.log(data)
//console.log(dataep)

let arrCharacter = [];

 //CARD PARA VER PERSONAJES
 const showData = (data) => {
     let result = '';
     //console.log(data)
     for (let i = 0; i < data.length; i++) {
         document.getElementById("allgot").innerHTML += `
          <div class = "card" style = "width: 18rem;"> 
          <img class = "card-img-top" src = ${data[i].characterImageFull} alt = "Card image cap" >
          <div class = "card-body">
              <h5 class = "card-title"> ${data[i].characterName} </h5> 
              <p class = "card-text"> House: ${data[i].houseName} </p>
              </div>`         
     }
     return result;
 };
 window.onload = showData(data);


 //SECCION VER INFORMACION CAPITULOS
 let arrEpisodes = [];

 //Card para mostrar todas la data
 const showDataep = (dataep) => {
     let result = '';
     //console.log(data)
     for (let i = 0; i < dataep.length; i++) {
         document.getElementById("allepi").innerHTML += `
          <div class = "card" style = "width: 18rem;"> 
          <div class = "card-body">
              <h5 class = "card-title"> ${dataepi[i].episodeTitle} </h5>
              <p class = "card-text" > Season: ${dataepi[i].episodeDescription} </p> 
              <p class = "card-text"> Description: ${dataepi[i].seasonNum} < /p>
              </div>
              </div>`
     }
     return result;
 };
 window.onload = showDataep(dataep);