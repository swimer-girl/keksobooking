import { getRandomPositiveInteger } from './util.js';
import { getRandomArrayElement } from './util.js';
import { getRandomFloat } from './util.js';
import { getNewArray } from './util.js';

const CreateAuthor = (index) => ({
  avatar: `img/avatars/user${  String(index).padStart(2, '0')  }.png`,
});

const getAuthor = () => Array.from({length: 10}, (_, authorIndex) => CreateAuthor(authorIndex + 1));

const title = ['Бунгало', 'Дворец', 'Хостел', 'Дом на двоих', 'Аппартаменты',];

const type = ['palace', 'flat', 'house', 'bungalow', 'hotel',];
const hourscheck = ['12:00', '13:00', '14:00',];
const descriptions = [
  'Море',
  'Солнце',
  'Песок',
  'Завтрак',
  'Обед',
  'Ресторан',
];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createOffer = (index) => ({
  title: getRandomArrayElement(title),
  address: '',
  price: getRandomPositiveInteger(1000, 30000),
  type: getRandomArrayElement(type),
  rooms: getRandomPositiveInteger(1, 10),
  guests: getRandomPositiveInteger(1, 8),
  checkin: getRandomArrayElement(hourscheck),
  checkout: getRandomArrayElement(hourscheck),
  features: getNewArray(features),
  description: getRandomArrayElement(descriptions),
  photos: getNewArray(photos),
});

const getOffer = () => Array.from({length: 10}, (_, offerIndex) => createOffer(offerIndex + 1));

const createLocation = () => ({
  lat: getRandomFloat(35.65000, 35.70000, 5),
  lng: getRandomFloat(139.70000, 139.80000, 5),
});
const getLocation = () => Array.from({length: 10}, (_, offerIndex) => createLocation(offerIndex + 1));

const getObject = () => ({
  author: getAuthor(),
  offer: getOffer(),
  location: getLocation(),
});

//const getObject = () => Array.from({length: 10}, (_, offerIndex) => createLocation(offerIndex + 1)) + Array.from({length: 10}, (_, offerIndex) => createOffer(offerIndex + 1));

export {getObject};
