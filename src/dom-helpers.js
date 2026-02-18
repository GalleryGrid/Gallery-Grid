// create elements

const artDetails = document.querySelector('#art-detail');
const artList = document.querySelector('#art-list');

export const renderArt = () => {
    artList.forEach((art) => {
        const li = document.createElement('li');
        li.dataset.artId = art.id;

        const p = document.createElement('p');
        p.textContent = p.title

        const img = document.createElement('img');
        img.src = art.image;
        img.alt = art.alt;

        const button = document.createElement('button');
        button.textContent = 'more info';

        li.append(img, p, button);
        artList.append(li);
    })
};

export const renderArtDetails = (art) => {
    artDetails.classList.remove('hidden');
    artDetails.innerHTML = '';
  
    const img = document.createElement('img');
    const title = document.createElement('h2');
    const description = document.createElement('p');
      
    img.src = art.image;
    img.alt = art.alt;
    title.textContent = art.title;
      
    artDetails.append(img, title, description);
};