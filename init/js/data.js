import { getRandomPositiveInteger, getRandomArrayElement,getRandomFloat, getNewArray } from './util.js';

const titles = ['Бунгало', 'Дворец', 'Хостел', 'Дом на двоих', 'Аппартаменты',];

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel',];
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
  author: {
    avatar: `img/avatars/user${`${index}`.padStart(2, '0')}.png`,
  },
  offer: {
    title: getRandomArrayElement(titles),
    address: [getRandomFloat(35.65000, 35.70000, 5), getRandomFloat(139.70000, 139.80000, 5)],
    price: getRandomPositiveInteger(1000, 30000),
    type: getRandomArrayElement(types),
    rooms: getRandomPositiveInteger(1, 10),
    guests: getRandomPositiveInteger(1, 8),
    checkin: getRandomArrayElement(hourscheck),
    checkout: getRandomArrayElement(hourscheck),
    features: getNewArray(features),
    description: getRandomArrayElement(descriptions),
    photos: getNewArray(photos),
  },
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  },
});

const getOffer = () => Array.from({length: 10}, (_, index) => createOffer(index + 1));


export {getOffer};
