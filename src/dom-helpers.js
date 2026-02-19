// create elements

const artDetails = document.querySelector('#art-detail');
const artList = document.querySelector('#art-list');

export const renderArt = (artworks) => {
    artworks.forEach((art) => {
        if (!art.image_id) return;
        const li = document.createElement('li');
        li.dataset.artId = art.id;

        const p = document.createElement('p');
        p.textContent = art.title;

        const img = document.createElement('img');
        img.src = `https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`;

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
      
    img.src = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
    img.alt = art.title;
    title.textContent = art.title;
    description.textContent = art.description;
      
    artDetails.append(img, title, description);
};