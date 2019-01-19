/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */
const data = DATA.characters;
//console.log(data)

let arrCharacter = [];

 //Card para mostrar todas la data
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