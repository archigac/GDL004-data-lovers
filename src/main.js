import POTTER from'./data/potter/potter.js';
const potterData = POTTER;

//Mostrar pagina dos
document.getElementById('buttonOne').addEventListener('click', showPageTwo);
function showPageTwo(){
  document.getElementById('pageTwo').style.display = 'block';
  document.getElementById('pageOne').style.display = 'none';
};

//Volver a pagina uno
document.getElementById('backButton').addEventListener('click', backPageOne);
function backPageOne(){
  document.getElementById('pageTwo').style.display = 'none';
  document.getElementById('pageOne').style.display = 'block';
};

//Funciones importadas de data.js

//Gryffindor
import{showHouseOne}from'./data.js';
document.getElementById('houseOne').addEventListener('click', showHouseOne);
//Slytherin
import{showHouseTwo}from'./data.js';
document.getElementById('houseTwo').addEventListener('click', showHouseTwo);
//Ravenclaw
document.getElementById('houseThree').addEventListener('click', showHouseThree);
import{showHouseThree}from'./data.js';
//Hufflepuff
import{showHouseFour}from'./data.js';
document.getElementById('houseFour').addEventListener('click', showHouseFour);

import{showAllCharacters}from'./data.js';
document.getElementById('showAll').addEventListener('click', showAllCharacters);

//Variable para funcion showInfo
let clic = 1;

//Funcion para mostrar y ocultar informacion Gryffindor
document.getElementById('houseOne').addEventListener('click', showInfo);
function showInfo(){
  if(clic==1){
    document.getElementById('rootGry').style.display = "block";
    document.getElementById('rootGryStudent').style.display = "block";
    document.getElementById('rootGryOut').style.display = "block";
    clic = clic + 1;
  }
};

//Funcion para mostrar y ocultar informacion Slytherin
document.getElementById('houseTwo').addEventListener('click', showInfoTwo);
function showInfoTwo(){
  if(clic==1){
    document.getElementById('rootGry').style.display = "block";
    document.getElementById('rootGryStudent').style.display = "block";
    document.getElementById('rootGryOut').style.display = "block";
    clic = clic + 1;
  }
};

//Funcion para mostrar y ocultar informacion Ravenclaw
document.getElementById('houseThree').addEventListener('click', showInfoThree);
function showInfoThree(){
  if(clic==1){
    document.getElementById('rootGry').style.display = "block";
    clic = clic + 1;
  }
};

//Funcion para mostrar y ocultar informacion Hufflepuff
document.getElementById('houseFour').addEventListener('click', showInfoFour);
function showInfoFour(){
  if(clic==1){
    document.getElementById('rootGry').style.display = "block";
    clic = clic + 1;
  }
};

document.getElementById('cleanHouses').addEventListener('click', cleanAll);
function cleanAll(){
  document.getElementById("rootGry").innerHTML = '';
  document.getElementById("rootGryStudent").innerHTML = '';
  document.getElementById("rootGryOut").innerHTML = '';
  document.getElementById('characters').innerHTML = '';
  document.getElementById('characters').innerHTML = '';
}


//Pruebas
