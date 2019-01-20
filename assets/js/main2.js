/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */

const dataep = EPISODES.episodes;
const containerRoot = document.querySelector ("#root2 .row");
const selectSeason = document.getElementById("filterSeason1");
console.log(selectSeason)
//console.log(selectSeason)


 //SECCION VER INFORMACION CAPITULOS
 let arrEpisodes = [];

 //CARD PARA VER CAPITULOS
 const showDataep = (dataep) => {
     let result = '';
     //console.log(dataep)
    dataep.forEach(element => 
            result = containerRoot.innerHTML += `
       <div class = "col-6 col-md-2">
       <div class = "card-w-100 mb-3 p-0">
           <p class = "card-text"> Temporada ${element.seasonNum} Episodio ${element.episodeNum} </p> 
       <h5 class = "card-title"> ${element.episodeTitle} </h5>  
       <p class = "card-text"> Descripción: ${element.episodeDescription} </p> 
       </div>
       `
          )
          return result;
          }

selectSeason.addEventListener('change', () => {
    let condition = selectSeason.value;
    let filtered = filterSeason(dataep, condition);

    // limpio div
    containerRoot.innerHTML = '';

    filtered.forEach(element => {
        containerRoot.innerHTML += `
   <div class = "col-6 col-md-2" >
       <div class = "card-w-100 mb-3 p-0">
       <p class = "card-text"> Temporada ${element.seasonNum} Episodio ${element.episodeNum} </p>
       <h5 class = "card-title"> ${element.episodeTitle} </h5> 
       <p class = "card-text"> Descripción: ${element.episodeDescription} </p> </div>`
        })
        })
    window.onload = showDataep(dataep)


