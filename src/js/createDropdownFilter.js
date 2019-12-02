"use strict";

const createDropdownFilter = (attributes) => {
  // crea el contenedor para el filtro
  let filterContainer = document.createElement("div");
  // agrega una clase al contenedor para poder moficar su estilos con CSS
  filterContainer.setAttribute('class', 'filter-container');

  // crea el elemento label (etiqueta)
  let filterLabel = document.createElement("label");
  // establece el valor del attributo For igual al id del select
  filterLabel.htmlFor = attributes.id;
  // assigna el text que se muestra en el label
  filterLabel.innerHTML = attributes.name;
   // agrega una clase al label para poder moficar su estilos con CSS
  filterLabel.setAttribute('class', 'filter-label');

  // agrega el label al contenedor
  filterContainer.appendChild(filterLabel);

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

  // agrega el select al contenedor
  filterContainer.appendChild(dropdown)
  return filterContainer;
}

export default createDropdownFilter;
