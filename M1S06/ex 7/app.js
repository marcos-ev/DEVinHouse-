const fetchCharacthers = async (page) => {
  const rawData = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const characthersJson = await rawData.json();
  return characthersJson.results;
};

const createListItem = (character) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <p>Name: ${character.name}</p>
    <img src="${character.image}" alt="${character.name}">
  `;
  return listItem;
};

const renderPage = async (pageNumber) => {
  const characters = await fetchCharacthers(pageNumber);
  const list = document.createElement('ul');
  characters.forEach((character) => {
    list.appendChild(createListItem(character));
  });
  const charactersDiv = document.getElementById('characters');
  charactersDiv.innerHTML = '';
  charactersDiv.appendChild(list);
};

let currentPage = 1;
renderPage(currentPage);