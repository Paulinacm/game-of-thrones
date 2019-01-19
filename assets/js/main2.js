/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */

const dataep = EPISODES.episodes;
const containerRoot = document.getElementById('root2');
//console.log(dataep)
 //SECCION VER INFORMACION CAPITULOS
 let arrEpisodes = [];

 //CARD PARA VER CAPITULOS
 const showDataep = (dataep) => {
     let result = '';
     //console.log(data)
    dataep.forEach(element => {
        result = containerRoot.innerHTML += `
       <div class = "card" style = "width: 18rem;" >
           <div class = "card-body">
           <h5 class = "card-title"> ${element.episodeTitle} </h5>
           <p class = "card-text"> Temporada: ${element.seasonNum} </p>
           <p class = "card-text"> Description: ${element.episodeDescription} </p> </div>
       `
    });
    return result;
    }
    window.onload = showDataep(dataep);



      

