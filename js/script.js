const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const list = document.getElementById('character-list');
const pageNumbers = document.getElementById('page-numbers');
const urlEndpoint = 'https://rickandmortyapi.com/api/character/?page=';
let currentPage = 1;

fetch(urlEndpoint + currentPage)
  .then((response) => {
    if (!response.ok) {
      throw new Error('La solicitud no se pudo resolver');
    }
    return response.json();
  })
  .then((data) => {
    //console.log(data);
    //console.log(data.results);
    pageNumbers.innerHTML = `<p class="pageNumber">Page ${currentPage}</p>`;
    for (let i = 0; i < data.results.length; i++) {
      const character = document.createElement('li');
      const imgCharacter = document.createElement('img');
      const nameCharacter = document.createElement('p');
      const speciesCharacter = document.createElement('p');
      list.appendChild(character);
      character.appendChild(imgCharacter);
      character.appendChild(nameCharacter);
      character.appendChild(speciesCharacter);
      imgCharacter.src = data.results[i].image;
      nameCharacter.innerHTML = `<span>Name:</span> ${data.results[i].name}`;
      speciesCharacter.innerHTML = `<span>Species:</span> ${data.results[i].species}`;
      //console.log(data.results[i])
    }
  })
  .catch((error) => {
    list.innerHTML = `<li>Hubo un error y no se pudo obtener la información de Rick and Morty</li>`;
  });

//console.log(urlEndpoint + currentPage)


nextPageBtn.addEventListener('click', () => {
  list.innerHTML = '';
  currentPage += 1;
  fetch(urlEndpoint + currentPage)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no se pudo resolver');
      }
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      //console.log(data.results);
      pageNumbers.innerHTML = '';
      pageNumbers.innerHTML = `<p class="pageNumber">Page ${currentPage}</p>`;
      for (let i = 0; i < data.results.length; i++) {
        const character = document.createElement('li');
        const imgCharacter = document.createElement('img');
        const nameCharacter = document.createElement('p');
        const speciesCharacter = document.createElement('p');
        list.appendChild(character);
        character.appendChild(imgCharacter);
        character.appendChild(nameCharacter);
        character.appendChild(speciesCharacter);
        imgCharacter.src = data.results[i].image;
        nameCharacter.innerHTML = `<p><span>Name:</span> ${data.results[i].name}</p>`;
        speciesCharacter.innerHTML = `<p><span>Species:</span> ${data.results[i].species}</p>`;
        //console.log(data.results[i])
      }
    })
  //console.log('Adelante: ' + urlEndpoint + currentPage);
    .catch((error) => {
      list.innerHTML = `<li>Hubo un error y no se pudo obtener la información de Rick and Morty</li>`;
    });
});

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    list.innerHTML = '';
    currentPage -= 1;
    fetch(urlEndpoint + currentPage)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no se pudo resolver');
        }
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        //console.log(data.results);
        pageNumbers.innerHTML = '';
        pageNumbers.innerHTML = `<p class="pageNumber">Page ${currentPage}</p>`;
        for (let i = 0; i < data.results.length; i++) {
          const character = document.createElement('li');
          const imgCharacter = document.createElement('img');
          const nameCharacter = document.createElement('p');
          const speciesCharacter = document.createElement('p');
          list.appendChild(character);
          character.appendChild(imgCharacter);
          character.appendChild(nameCharacter);
          character.appendChild(speciesCharacter);
          imgCharacter.src = data.results[i].image;
          nameCharacter.innerHTML = `<p><span>Name:</span> ${data.results[i].name}</p>`;
          speciesCharacter.innerHTML = `<p><span>Species:</span> ${data.results[i].species}</p>`;
          //console.log(data.results[i])
        }
      })
    //console.log('Atrás: ' + urlEndpoint + currentPage);
      .catch((error) => {
        list.innerHTML = `<li>Hubo un error y no se pudo obtener la información de Rick and Morty</li>`;
      });
  }
});



// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇

/*   ---------   INICIO COMENTARIO   -----------

const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');
const characterList = document.getElementById("character-list")
let currentPage = 1;

// Con el map, solo renderiza el DOM una vez, porque guarda los datos en un array, y luego los suelta todos los datos de una vez. Entonces a nivel performance es mucho mejor

function getCharacters() {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`) //Pedir los datos de el end point
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la petición: ${response.status}')
      }
      return response.json(); //los datos que vienen los parseamos a un formato legible para JS (JSON)
    })
    .then(data => {
      const characters = data.results.map(character => {
        const template = `
         <li>
          <img src="${character.image}" alt="${character.name}" />
          <h2>Name: ${character.name}</h2>
          <p>Species: ${character.species}</p>
        </li >
      `
        return template
      }).join("")
      characterList.innerHTML = characters;
      removeButton();
    })// Obtenemos los datos que están en el endpoint ya parseados y preparados para usar
    .catch(err => console.log(err));
}

function removeButton() {
  currentPage === 1   ? prevPage.classList.add("disabled") : prevPage.classList.remove("disabled");
  currentPage === 42  ? nextPage.classList.add("disabled") : nextPage.classList.remove("disabled");
}

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    //console.log(currentPage);
    getCharacters();
  }
})


nextPage.addEventListener("click", () => {
  if (currentPage < 42) {
    currentPage++;
    getCharacters();
  }
})
--------------- FIN COMENTARIO ---------    */

/*
//Con el forEach está renderizando en cada vuelta en nuestro DOM, por lo que a nivel performance es peor
fetch("https://rickandmortyapi.com/api/character/?page=1")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {
      const template = `
         <li>
          <img src="${character.image}" alt="${character.name}" />
          <h2>${character.name}</h2>
        </li >
      `
      characterList.innerHTML += template;
    });
  })// Obtenemos los datos que están en el endpoint ya parseados y preparados para usar
*/