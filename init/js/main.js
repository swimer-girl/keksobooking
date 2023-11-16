function getRandomFloat(a, b, decimals = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(decimals);
}

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const checkLenghtString = (string, length) => {
  return string.length <= length;
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const CreateAuthor = (index) => ({
  avatar: 'img/avatars/user' + String(index).padStart(2, '0') + '.png',
});

const getAuthor = () => Array.from({length: 10}, (_, authorIndex) => CreateAuthor(authorIndex + 1));

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
]

const getNewArray = (array) => {
  const arr = Array.from(array);
  const arrayNew = new Array(getRandomPositiveInteger(1, arr.length));

  for (let i = 0; i < arrayNew.length; i++) {
  arrayNew[i]=arr.splice(getRandomPositiveInteger(0, arr.length-1), 1).join();
}  
  return arrayNew;
}

const createLocation = () => ({
  lat: getRandomFloat(35.65000, 35.70000, 5),
  lng: getRandomFloat(139.70000, 139.80000, 5),
});
const getLocation = () => Array.from({length: 10}, (_, offerIndex) => createLocation(offerIndex + 1));

//const getObject = () => ({
//  author: getAuthor(),
//  offer: getOffer(),
//  location: getLocation(),
//});

//const getObject = () => Array.from({length: 10}, (_, offerIndex) => createLocation(offerIndex + 1)) + Array.from({length: 10}, (_, offerIndex) => createOffer(offerIndex + 1));

getRandomFloat(1, 11, 5);

console.log(getObject());