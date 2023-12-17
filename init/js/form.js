import { resetMap } from './map.js';
import { resetSlider } from './slider.js';
import { sendData } from './api.js';
//import { setInactiveState } from './statepage';


const getForm = document.querySelector('.ad-form');
const priceField = getForm.querySelector('#price');
const numberRoom = getForm.querySelector('#room_number');
const capacity = getForm.querySelector('#capacity');
const timeIn = getForm.querySelector('#timein');
const timeOut = getForm.querySelector('#timeout');
const submitButton = getForm.querySelector('.ad-form__submit');

const MIN_TITLE_SYMBOLS = 30;
const MAX_TITLE_SYMBOLS =100;

const minPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const pristine = new Pristine(getForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
});

//Валидация заголовка
function validateTitle (value) {
  return value.length >= MIN_TITLE_SYMBOLS && value.length <= MAX_TITLE_SYMBOLS;
}

pristine.addValidator(
  getForm.querySelector('#title'),
  validateTitle,
  `От ${MIN_TITLE_SYMBOLS} до ${MAX_TITLE_SYMBOLS} символов`
);

//Валидация цены
function validatePrice(value) {
  const type = getForm.querySelector('[name="type"]');
  return value.length && parseInt(value, 10) >= minPrices[type.value];
}
function getPriceErrorMessage () {
  const type = getForm.querySelector('[name="type"]');
  return `минимальная цена за ночь ${minPrices[type.value]}`;
}

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

function onUnitChange () {
  priceField.placeholder = minPrices[this.value];
  pristine.validate(priceField);
}
getForm
  .querySelectorAll('[name="type"]')
  .forEach((item) => item.addEventListener('change', onUnitChange));

//Валидация комнат и мест в них
const roomOption = {
  '1': '1',
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': '0'
};
function validateRoom () {
  return roomOption[numberRoom.value].includes(capacity.value);
}
function capacityRoomErrorMessage () {
  if (numberRoom.value === '1') {
    return 'не более 1 гостя';
  } else if (numberRoom.value === '2') {
    return 'укажите от 1 до 2 гостей';
  } else if (numberRoom.value === '3') {
    return 'укажите от 1 до 3 гостей';
  } else if (numberRoom.value === '100') {
    return 'не для гостей';
  }
}

pristine.addValidator(capacity, validateRoom, capacityRoomErrorMessage);

function onTimeChange() {
  if (this === timeIn) {
    timeOut.value = this.value;
  } else if (this === timeOut) {
    timeIn.value = this.value;
  }
}

// Навешиваем обработчик на изменение времени
timeIn.addEventListener('change', onTimeChange);
timeOut.addEventListener('change', onTimeChange);

//Очистка после отправки формы
const resetForm = () => {
  resetSlider();
  getForm.reset();
  resetMap();
};
const setDisableState = (state) => {
  submitButton.disabled = state;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendData(new FormData(evt.target))
      .then (() => {
        resetForm();
      })
      .finally(() => setDisableState(false));
  }
};
// Навешиваем обработчик на отправку формы
getForm.addEventListener('submit', onFormSubmit);
