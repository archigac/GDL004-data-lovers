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

const GENDER = { id: 'gender-filter', name: 'Gender', options: genderOptions() };
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
const PATRONUS = { id: 'patronus-filter', name: 'Patronus', options: patronusOptions() };

//------------------------------ SPECIES
const speciesOptions = () => {
  let options = [];
  potterData.forEach(character => {
    options.push(character.species)
  })
  options = [...new Set(options)];
  return options;
}

const SPECIES = { id: 'species-filter', name: 'Species', options: speciesOptions() };
//---------------------------- HOUSE
const housesOptions = () => {
  let options = [];
  potterData.forEach(character => {
    options.push(character.house)
  })
  options = [...new Set(options)];
  return options;
}

const HOUSES = { id: 'houses-filter', name: 'Houses', options: housesOptions() };

//Crea los dropdown.
export default () => {
  let filterBar = document.getElementById('filterBar');
  let genderDropdown = createDropdownFilter(GENDER)
  filterBar.appendChild(genderDropdown);
  let patronusDropdown = createDropdownFilter(PATRONUS)
  filterBar.appendChild(patronusDropdown);
  let speciesDropdown = createDropdownFilter(SPECIES)
   filterBar.appendChild(speciesDropdown);
  let housesDropdown = createDropdownFilter(HOUSES)
  filterBar.appendChild(housesDropdown);
}
