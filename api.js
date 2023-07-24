let URL = 'https://rickandmortyapi.com/api/character';

const getCharacter = async () => {
    const response = await fetch(URL);
    const characterResponse = await response.json();
    const characters = characterResponse.results;

    //characterCard.innerHTML= '';

    const characterCard = document.querySelector('.main-container');
    
    for(const character of characters) {

        //characterCard.innerHTML= '';

        const name = character.name;
        const img = character.image;
        const status = character.status;
        const gender = character.status;
        const species = character.species;

        const characterElements = document.createElement('div');
        characterElements.classList = 'card';
        const nameCharacter = document.createElement('h2');
        const imgCharacter = document.createElement('img');
        const statusCharacter = document.createElement('p');
        const genderCharacter = document.createElement('p');
        const speciesCharacter = document.createElement('p');

        nameCharacter.textContent = name;
        imgCharacter.src = img;
        statusCharacter.textContent = `Estado: ${status}`;
        genderCharacter.textContent = `Género: ${gender}`;
        speciesCharacter.textContent = `Especie: ${species}`;

        characterElements.appendChild(nameCharacter);
        characterElements.appendChild(imgCharacter);
        characterElements.appendChild(statusCharacter);
        characterElements.appendChild(genderCharacter);
        characterElements.appendChild(speciesCharacter);

        characterCard.appendChild(characterElements);
    } 
} 

getCharacter();