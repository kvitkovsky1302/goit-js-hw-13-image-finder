import './sass/main.scss';
import ApiService from './js/apiService.js';
import createImageCard from './templates/image-card.hbs';

const refs = {
    searchForm: document.querySelector('#search-form'),
    galery: document.querySelector('.gallery'),
}

const apiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();

    apiService.query = e.currentTarget.elements.query.value;
    fetchImages();

}

function fetchImages() {
    apiService.fetchImages().then(images => {
        createGallery(images);
    });
}

function createGallery(images) {
    refs.gallery.insertAdjacentHTML('beforeend', createImageCard(images));
}
