import { renderArt, renderArtDetails } from './dom-helpers'
import { fetchData, getArt, getArtById } from './fetch-helpers'

const errorMessage = document.querySelector('#error-message');
getArt().then((res) => {
    if (res.error) {
        errorMessage.textContent = res.error.message;
    } else {
        renderArt(res.data.products);
    }
});
