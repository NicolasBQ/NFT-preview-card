const card = document.querySelector('.card');
const cardImg = document.querySelector('.card__image');
const imgActive = document.querySelector('.active-image');
const closeBtn = document.querySelector('.close-btn');
const body = document.getElementsByTagName('body');

let active = true;

cardImg.addEventListener('click',activeImage)

function activeImage() {
    imgActive.classList.add('active');
    body[0].classList.add('darker');
    card.classList.add('disabled-card');
    closeBtn.classList.add('close-btn__active');
}

closeBtn.addEventListener('click', activeCard);

function activeCard() {
    imgActive.classList.remove('active');
    body[0].classList.remove('darker');
    card.classList.remove('disabled-card');
    closeBtn.classList.remove('close-btn__active');
}
