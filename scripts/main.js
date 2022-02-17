const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR ='[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails() {
    'use strict';
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR); 
    detailImage.setAttribute('src', 'img/otter3.jpg');
}
