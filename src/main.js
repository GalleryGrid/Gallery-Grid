import { renderArt, renderArtDetails } from './dom-helpers.js';
import { fetchData, getArt, getArtById } from './fetch-helpers.js';
import './event-listener.js';

const errorMessage = document.querySelector('#error-message');
getArt(1).then((res) => {
  if (res.error) {
    errorMessage.textContent = res.error.message;
  } else {
    renderArt(res.data.data);
  }
});
