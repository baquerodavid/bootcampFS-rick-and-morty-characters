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
    });
  //console.log('Adelante: ' + urlEndpoint + currentPage);
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
      });
    //console.log('Atrás: ' + urlEndpoint + currentPage);
  }
});