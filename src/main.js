import { renderArt, renderArtDetails } from './dom-helpers.js'
import { fetchData, getArt, getArtById } from './fetch-helpers.js'

let currentPage = 1;
const errorMessage = document.querySelector('#error-message');
getArt(currentPage).then((res) => {
    if (res.error) {
        errorMessage.textContent = res.error.message;
    } else {
        renderArt(res.data.data);
    }
});
