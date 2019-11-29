"use strict";

import  POTTER  from './../data/potter/potter.js';
const potterData = POTTER;

const filter = () => {
  let genderDropdown = document.getElementById("gender-filter");
  let selectedGenderValue = genderDropdown.value;
  let patronusDropdown = document.getElementById("patronus-filter");
  let selectedPatronusValue = patronusDropdown.value;
  let speciesDropdown = document.getElementById("species-filter");
  let selectedSpeciesValue = speciesDropdown.value;
  let housesDropdown = document.getElementById('houses-filter');
  let selectedHousesValue = housesDropdown.value;

  let data = potterData;
  if (selectedGenderValue !== "all") {
    data = data.filter((character) => {
      if(character.gender == selectedGenderValue) {
        return character;
      }
    });
  }
  if (selectedPatronusValue !== "all") {
    data = data.filter((character) => {
      if(character.patronus == selectedPatronusValue) {
        return character;
      }
    });
  }
  if (selectedSpeciesValue !== "all") {
    data = data.filter((character) => {
      if(character.species == selectedSpeciesValue) {
        return character;
      }
    });
  }
  if (selectedHousesValue !== "all") {
    data = data.filter((character) => {
      if(character.houses == selectedHousesValue) {
        return character;
      }
    });
  }
//***Alerta!!! No borrar por nada del mundo!!!
  // let result = potterData.filter((character) => {
  //   if(character.gender === selectedGenderValue && character.patronus === selectedPatronusValue &&
  //     character.species === selectedSpeciesValue && character.house === selectedHousesValue){
  //     console.log(character);
  //     return character;
  //   }
  // })
  console.log(data);
  return data;//aquì se debe crear una tabla con el resultado (en lugar
    //del result)
}



//******************** trabajando>
// let result = potterData.filter((character) => {
//   if (character.gender === selectedGenderValue){
//     // console.log(character);
//     return character;
//     return result;
//   } else if (character.gender === selectedGenderValue && character.patronus === selectedPatronusValue){
//     console.log(character);
//   return character;
// }
// return result;//aquì se debe crear una tabla con el resultado (en lugar
// //del result)
// });
//
//
//     //  &&
//     // character.species === selectedSpeciesValue && character.house === selectedHousesValue){
//
//
// //********************trabajando>


const bindGenderFilter = () => {
  let genderDropdown = document.getElementById("gender-filter");
  genderDropdown.addEventListener("change", filter, false);
}
//Agrega un listener para el dropdown patronus-filter para mandar llamar la
//función filterPatronus cuando cambia el valor del dropdown.
const bindPatronusFilter = () => {
  let patronusDropdown = document.getElementById("patronus-filter");
  patronusDropdown.addEventListener("change", filter, false);
}
const bindSpeciesFilter = () => {
  let speciesDropdown = document.getElementById("species-filter");
  speciesDropdown.addEventListener("change", filter, false);
}
const bindHousesFilter = () => {
  let housesDropdown = document.getElementById("houses-filter");
  housesDropdown.addEventListener("change", filter, false);
}

//Exporta funciones que enlazan los filtros con la función que se ejecuta
//cuando el evento change ocurre para el dropdown.
export default () => {
  bindGenderFilter();
  bindPatronusFilter();
  bindSpeciesFilter();
  bindHousesFilter();
}


// const filterGender = () => {
//   let dropdown = document.getElementById("gender-filter");
//   let selectedOptionValue = dropdown.value;
//   let result = potterData.filter((character) => {
//     if(character.gender === selectedOptionValue){
//       console.log(character);
//       return character;
//     }
//   })
//   return result;
// }

//Filtra los datos usando el valor que se seleccionó en el dropdown
//patronus-filter.
// const filterPatronus = () => {
//   let dropdown = document.getElementById("patronus-filter");
//   let selectedOptionValue = dropdown.value;
//   let result = potterData.filter((character) => {
//     if(character.patronus === selectedOptionValue){
//       console.log(character);
//       return character;
//     }
//   })
//   return result;
// }
