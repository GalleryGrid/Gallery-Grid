import { getArt, getArtById } from './fetch-helpers.js';
import { renderArt, renderArtDetails } from './dom-helpers.js';

const loadButton = document.querySelector('#load-button');
const errorMessage = document.querySelector('#error-message');
const artList = document.querySelector('#art-list');
const artDetail = document.querySelector('#art-detail');

let currentPage = 1;

loadButton.addEventListener('click', () => {
  currentPage++;
  getArt(currentPage).then((res) => {
    if (res.error) {
      errorMessage.textContent = res.error.message;
    } else {
      renderArt(res.data.data);
    }
  });
});

artList.addEventListener('click', (event) => {
  if (event.target.matches('.button-info')) {
    const li = event.target.closest('li');
    const artId = li.dataset.artId;
    getArtById(artId).then((res) => {
      if (res.error) {
        errorMessage.textContent = res.error.message;
      } else {
        console.log(res.data.data)
        renderArtDetails(res.data.data);
      }
    });
  }
});

artDetail.addEventListener('click', (event) => {
  if (event.target.matches('#close-button')) {
    artDetail.classList.add('hidden');
  }
});