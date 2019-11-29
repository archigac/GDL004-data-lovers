import POTTER from './data/potter/potter.js';
const potterData = POTTER;
console.log(potterData);

export function showAllCharacters(){
    potterData.sort(function(a, b){
      if(a.name > b.name){
        return 1;
      }else if (b.name > a.name) {
        return -1;
      }else{
        return 0;
      }
    });

    potterData.forEach(function(index){
      if(index.patronus === ''){
        index.patronus = 'Unknown'
      }
      if (index.wand.core === '') {
        index.wand.core = 'Unknown'
      }
    });

  document.getElementById('characters').innerHTML = '';

    potterData.forEach(function (index){

      let rrr = document.createElement('div');
      rrr.setAttribute('class', 'nombreImg');

      let pruebaTemplate = `
      <div class="allCharactersName">
      ${index.name}
      <ul>
      <li>Actor:<br> ${index.actor}</li>
      <li>Patronus: <br>${index.patronus}</li>
      <li>Wand core: <br>${index.wand.core}</li>
      </ul>
      </div>
      <img class="allCharacters" src="${index.image}"></img>
      `
      rrr.innerHTML = pruebaTemplate;

      document.getElementById('characters').appendChild(rrr);

  });
};

export function showHouseOne(){
  document.getElementById("rootGry").innerHTML = '';
  document.getElementById("rootGryStudent").innerHTML = '';
  document.getElementById("rootGryOut").innerHTML = '';
  potterData.forEach(function(index){
    if(index.house === 'Gryffindor' && index.hogwartsStaff === true){
    document.getElementById("rootGry").innerHTML += '<td>'+'<img class="imageDisplay" src="'+index.image+'">'+ '<br>' +index.name+'</td>';
    }else if(index.house === 'Gryffindor' && index.hogwartsStudent === true){
    document.getElementById("rootGryStudent").innerHTML += '<td>'+'<img class="imageDisplay" src="'+index.image+'">'+ '<br>' +index.name+'</td>';
    }else if(index.house === 'Gryffindor' && index.hogwartsStudent === false && index.hogwartsStaff === false ){
    document.getElementById("rootGryOut").innerHTML += '<td>'+'<img class="imageDisplay" src="'+index.image+'">'+ '<br>' +index.name+'</td>';
    }
  });
};

export function showHouseTwo(){
  document.getElementById("rootGry").innerHTML = '';
  document.getElementById("rootGryStudent").innerHTML = '';
  document.getElementById("rootGryOut").innerHTML = '';
  potterData.forEach(function(index){
    if(index.house === 'Slytherin'&& index.hogwartsStaff === true){
      document.getElementById("rootGry").innerHTML += '<td>'+'<img class="imageDisplay" src="'+index.image+'">'+ '<br>' +index.name+'</td>';
    }else if(index.house === 'Slytherin' && index.hogwartsStudent === true){
    document.getElementById("rootGryStudent").innerHTML += '<td>'+'<img class="imageDisplay" src="'+index.image+'">'+ '<br>' +index.name+'</td>';
    }else if(index.house === 'Slytherin' && index.hogwartsStudent === false && index.hogwartsStaff === false ){
    document.getElementById("rootGryOut").innerHTML += '<td>'+'<img class="imageDisplay" src="'+index.image+'">'+ '<br>' +index.name+'</td>';
    }
  });
};

export function showHouseThree(){
  document.getElementById("rootGry").innerHTML = '';
  document.getElementById("rootGryStudent").innerHTML = '';
  document.getElementById("rootGryOut").innerHTML = '';
  potterData.forEach(function(index){
    if(index.house === 'Ravenclaw'){
      document.getElementById("rootGry").innerHTML += '<td>'+'<img class="imageDisplay" src="'+index.image+'">'+ '<br>' +index.name+'</td>';
    };
  });
};

export function showHouseFour(){
  document.getElementById("rootGry").innerHTML = '';
  potterData.forEach(function(index){
    if(index.house === 'Hufflepuff'){
      document.getElementById("rootGry").innerHTML += '<td>'+'<img class="imageDisplay" src="'+index.image+'">'+ '<br>' +index.name+'</td>';
    };
  });
};


//Pruebas


/*
for(let i = 0; i<potterData.length; i++){
  //console.log(potterData[i]);
};

potterData.forEach(function(index){
  //console.log(index.wand);
});

let prueba = potterData.filter(function(index){
  if(index.hogwartsStaff == true){
   return true;
  }
});
console.log(prueba);
//filter
let pruebaDos = potterData.filter(function(index){
  if(index.hogwartsStudent == true ) {
    return true;
  }
});
console.log(pruebaDos);

let pruebaTres = potterData.filter(function(index){
  if(index.hogwartsStudent == false && index.hogwartsStaff == false ) {
    return true;
  }
});
console.log(pruebaTres);

//Map
let gender = potterData.map(function(index){
  return index.gender;
});
console.log(gender);
*/
