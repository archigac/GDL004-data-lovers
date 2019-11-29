/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

 import  POTTER  from './data/potter/potter.js';
 const potterData = POTTER;

//***Alerta!!! No borrar por nada del mundo****
//Ya muestra todos los objetos (personajes), pero aún no los muestra en pantalla (no funciona con document.write).
// const gender = [potterData];
// potterData.forEach(character => {
//   if(character.gender == "female"){
//     console.log(character)
//   }
// })

//****Alerta no borrar por nada del mundo***
// //Crea una variable que es igual a un array vacío.
// let allGenders = [];
// //Itera cada elemento del conjunto de datos potterData y agrega el género de
// //cada caracter al array allGenders.
// potterData.forEach(character => {
//   allGenders.push(character.gender)
// })
// //Crea una variable que es igual a los valores únicos de todos los géneros
// //guardados en la varialbe allGenders (eliminando duplicados de la
// //variable allGenders).
// let gendersFiltered = [...new Set(allGenders)];
// //Crea una etiqueta del tipo select y la guarda en genderSelect.
// let genderSelect = document.createElement( "select" );
// //Itera cada uno de los géneros y crea una etiqueta option para cada género(u opción),
// //y agrega la opción a genderSelect.
// gendersFiltered.forEach(gender => {
//   let genderOption = document.createElement( "option" )
//   genderOption.value = gender;
//   genderOption.innerHTML = gender;
//   genderSelect.appendChild(genderOption);
// })
//   document.body.appendChild(genderSelect);



  //Crea una variable que es igual a un array vacío.
  let allGenders = [];
  //Itera cada elemento del conjunto de datos potterData y agrega el género de
  //cada caracter al array allGenders.
  potterData.forEach(character => {
    allGenders.push(character.gender)
  })
  //Crea una variable que es igual a los valores únicos de todos los géneros
  //guardados en la varialbe allGenders (eliminando duplicados de la
  //variable allGenders).
  let gendersFiltered = [...new Set(allGenders)];
  //Crea una etiqueta del tipo select y la guarda en genderSelect.
  let genderSelect = document.createElement( "select" );
  //Itera cada uno de los géneros y crea una etiqueta option para cada género(u opción),
  //y agrega la opción a genderSelect.
  gendersFiltered.forEach(gender => {
    let genderOption = document.createElement( "option" )
    genderOption.value = gender;
    genderOption.innerHTML = gender;
    genderSelect.appendChild(genderOption);
  })
    document.body.appendChild(genderSelect);

    const selectedItems = [];
    const  result = gendersFiltered.filter((character) => character.gender === genderSelect);
    console.log(result);

const filterFemale = (data) => {
  return data.filter((element) => {
    if(element.gender === 'male'){
      return element;
    }
  })
}
console.log(filterFemale(potterData));










// //Esto ya crea un "select" en el body, pero el select aún carece de los parámetros de elección.
// let genderOption = document.createElement( "option" )
//     genderOption.value = "male";
//     genderOption.innerHTML = "Male";
//     genderSelect.appendChild(genderOption);


// function charartersSearch(characteristic,potterData){
//   if (characteristic == name) {
// resultFromSearch = (name.index(potterData))
//   }
// }
//
// document.createElement("resultFromSearch");
