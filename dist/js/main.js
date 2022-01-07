const openCard = document.querySelector('.card__image');
const closeCard = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

openCard.addEventListener('click', activeCard);
closeCard.addEventListener('click', pasiveCard);
overlay.addEventListener('click', pasiveCard);

function activeCard() {
    openCard.classList.add('active');
    overlay.classList.add('overlay--active');
    closeCard.classList.add('close-btn--active');
}

function pasiveCard() {
    openCard.classList.remove('active');
    overlay.classList.remove('overlay--active');
    closeCard.classList.remove('close-btn--active');
}