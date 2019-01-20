/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */

const dataep = EPISODES.episodes;
const containerRoot = document.getElementById("root2");
const selectSeason = document.getElementById("filterSeason1");
//console.log(selectSeason)


 //SECCION VER INFORMACION CAPITULOS
 let arrEpisodes = [];

 //CARD PARA VER CAPITULOS
 const showDataep = (dataep) => {
     let result = '';
     //console.log(dataep)
    dataep.forEach(element => 
            result = containerRoot.innerHTML += `
       <div class = "card" style = "width: 18rem;" >
           <div class = "card-body">
           <h5 class = "card-title"> ${element.episodeTitle} </h5>
           <p class = "card-text"> Temporada: ${element.seasonNum} </p>
           <p class = "card-text"> Description: ${element.episodeDescription} </p> </div>
       `
          )
          return result;
          }

selectSeason.addEventListener('change', () => {
    let condition = selectSeason.options[selectSeason.selectedIndex].text;
    let filtered = filterSeason(dataep, condition);
    console.log(filtered)
    //console.log(condition)
    // limpio div
    containerRoot.innerHTML = '';

    filtered.forEach(element => {
        containerRoot.innerHTML += `
   <div class = "card" style = "width: 18rem;" >
       <div class = "card-body">
       <h5 class = "card-title"> ${element.episodeTitle} </h5> 
       <p class = "card-text"> Temporada: ${element.seasonNum} </p> 
       <p class = "card-text"> Descripción: ${element.episodeDescription} </p> </div> `
    
        })
        })
    window.onload = showDataep(dataep)