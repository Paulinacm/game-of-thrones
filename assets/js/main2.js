/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */

const dataep = EPISODES.episodes;
//console.log(dataep)
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
              <h5 class = "card-title"> ${dataep[i].episodeTitle} </h5>
              <p class = "card-text"> Season: ${dataep[i].seasonNum} </p> 
              <p class = "card-text"> Description: ${dataep[i].episodeDescription} </p>
              </div>
              </div>`
     }
     return result;
 };
 window.onload = showDataep(dataep);

