"use strict";

import  POTTER  from './../data/potter/potter.js';
const potterData = POTTER;
import createDropdownFilter from './createDropdownFilter.js';

//-------------- GENDER
const genderOptions = () => {
  let options = [];
  potterData.forEach(character => {
    options.push(character.gender)
  })
  options = [...new Set(options)];
  return options;
}

const GENDER = { id: 'gender-filter', options: genderOptions() };
//-------------------------- PATRONUS
//Obtiene las opciones para agregar al filtro.
const patronusOptions = () => {
  let options = [];
  potterData.forEach(character => {
    options.push(character.patronus)
  })
  options = [...new Set(options)];
  return options;
}

//Define los atributos que va a tener el filtro.
const PATRONUS = { id: 'patronus-filter', options: patronusOptions() };

//------------------------------ SPECIES
const speciesOptions = () => {
  let options = [];
  potterData.forEach(character => {
    options.push(character.species)
  })
  options = [...new Set(options)];
  return options;
}

const SPECIES = { id: 'species-filter', options: speciesOptions() };
//---------------------------- HOUSE
const housesOptions = () => {
  let options = [];
  potterData.forEach(character => {
    options.push(character.house)
  })
  options = [...new Set(options)];
  return options;
}

const HOUSES = { id: 'houses-filter', options: housesOptions() };

//Crea los dropdown.
export default () => {
  let genderDropdown = createDropdownFilter(GENDER)
  document.body.appendChild(genderDropdown);
  let patronusDropdown = createDropdownFilter(PATRONUS)
  document.body.appendChild(patronusDropdown);
  let speciesDropdown = createDropdownFilter(SPECIES)
  document.body.appendChild(speciesDropdown);
  let housesDropdown = createDropdownFilter(HOUSES)
  document.body.appendChild(housesDropdown);
}
