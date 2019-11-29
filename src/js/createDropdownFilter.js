"use strict";

const createDropdownFilter = (attributes) => {
  //Crea una etiqueta select.
   let dropdown = document.createElement( "select" );
  //Asigna el atributo id = atributes.id,  al dropdown.
  dropdown.setAttribute('id', attributes.id);
  let option = document.createElement( "option" )
  option.value = "all";
  option.innerHTML = "All";
  dropdown.appendChild(option);
  //Por cada option en atributes, crea una etiqueta option y agrega al select.
  attributes.options.forEach(optionValue => {
    let option = document.createElement( "option" )
    //Lo que esté en optionValue se va a asignar a option.value.
    option.value = optionValue;
    //Se asigna a innerHTML lo que esté en optionValue.
    option.innerHTML = optionValue;
    //Agrega dentro del dropdown el option que se acaba de crear.
    dropdown.appendChild(option);
  })
  return dropdown;
}

export default createDropdownFilter;
