//import { getOffer } from './data.js';

//const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

// Функция для сопоставления типа жилья с подписями
const getOfferType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

// Функция для создания DOM-элемента из объекта объявления
const createCardElement = (offer) => {
  const cardElement = cardTemplate.cloneNode(true);

  // Заполнение данных
  cardElement.querySelector('.popup__title').textContent = offer.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = getOfferType[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
  cardElement.querySelector('.popup__avatar').src = offer.author.avatar;

  // Заполнение удобств
  const featuresList = cardElement.querySelector('.popup__features');
  featuresList.innerHTML = ''; // Очищаем список перед заполнением

  if(offer.offer.features && Array.isArray(offer.offer.features)) {
    offer.offer.features.forEach((feature) => {
      const featureElement = featuresList.cloneNode(true);
      featureElement.classList = `popup__feature popup__feature--${feature}`;
      featuresList.appendChild(featureElement);
    });
  }

  // Заполнение описания
  cardElement.querySelector('.popup__description').textContent = offer.offer.description;

  // Заполнение фотографий
  const photosContainer = cardElement.querySelector('.popup__photos');
  const photoList = cardElement.querySelector('.popup__photo');
  photosContainer.innerHTML = ''; // Очищаем контейнер перед заполнением

  if(offer.offer.photos && Array.isArray(offer.offer.photos)) {
    offer.offer.photos.forEach((photo) => {
      const photoElement = photoList.cloneNode(true);
      photoElement.src = photo;
      photosContainer.appendChild(photoElement);
    });
  }

  return cardElement;
};

// // Получаем данные для заполнения
// const createOfferCard = () => {
//   const offersData = getOffer();
//   const cardElement = createCardElement(offersData[0]);
//   mapCanvas.appendChild(cardElement);
// };

export {createCardElement};
