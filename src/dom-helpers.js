// create elements

const artDetails = document.querySelector('#art-detail');
const artList = document.querySelector('#art-list');

export const renderArt = (artworks) => {
    artworks.forEach((art) => {
        if (!art.image_id) return;
        const fallback = document.querySelector('[data-product-id="1"]');
        fallback.style.display = 'none';
        const li = document.createElement('li');
        li.dataset.artId = art.id;

        const p = document.createElement('p');
        p.textContent = art.title;

        const img = document.createElement('img');
        img.src = `https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`;

        const button = document.createElement('button');
        button.classList.add('button-info');
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
    const artist = document.createElement('p');
    const date = document.createElement('p');
    const description = document.createElement('p');
    const closeButton = document.createElement('button');
    const container = document.createElement('div');
      
    img.src = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
    img.alt = art.title;
    title.textContent = art.title;
    artist.textContent = art.artist_display;
    date.textContent = art.date_display;
    description.textContent = art.description;
    container.id = 'art-detail-container';
    closeButton.textContent = 'Close';
    closeButton.id = 'close-button';
    container.append(closeButton, img, title, description, artist, date);
    artDetails.append(container);
};