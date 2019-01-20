/**
 * Acá va solo la lógica
 * ###1. Pantalla inicial

 1.1 Al iniciar la app deben cargarse ** foto y nombre ** de todos los personajes incluídos en la data.
 1.2 Debe existir un botón o link en la pantalla inicial que al hacer click permita listar ** todos los capítulos ** .
 
 ### 2. Pantalla capítulos

 2.1 Se deben listar los capítulos(en base a lo explicado en el punto 1.2) con la siguiente información: `nombre capítulo, descripción, temporada a la que corresponde`.
 2.2 El usuario debe poder filtrar en esta pantalla los capítulos ** por temporada ** .
 */

//console.table(data)

const filterSeason = (data, condition) => {
    const filteredSeason = data.filter(element => {
        return element.seasonNum === parseInt(condition)
    })
    return filteredSeason;
};
window.filterSeason = filterSeason
