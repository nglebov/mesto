const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_text_name')
let jobInput = document.querySelector('.popup__input_text_job')

nameInput.value = profileName.textContent;
jobInput.value = profileDescription.textContent;

function popupToggle() {
    popup.classList.toggle('popup_opened');
}

profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupToggle()
}

let formElement = document.querySelector('.popup__form-edit')
formElement.addEventListener('submit', handleFormSubmit);

//массив с карточкми по умолчанию

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//находим контейнер
const cardsConteiner = document.querySelector('.cards__list');
const template = document.querySelector('#card-template');

// функция создания карточки
const createCard = (places) => {
    const card = template.content.querySelector('.card').cloneNode(true);
    const cardTitle = card.querySelector('.card__title');
    cardTitle.textContent = places.name;
    const cardImage = card.querySelector('.card__image');
    cardImage.src = places.link;
    return card;
}

const renderCard = (cardName) => {
    cardsConteiner.append(createCard(cardName));
}

initialCards.forEach((places) => {
    renderCard(places);
});



// добавление новой карточки
const newCardButton = document.querySelector('.profile__add-button');
newCardButton.addEventListener('click', popupToggle);