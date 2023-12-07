const getForm = document.querySelector('.ad-form');
const priceField = getForm.querySelector('#price');
const numberRoom = getForm.querySelector('#room_number');
const capacity = getForm.querySelector('#capacity');
const timeIn = getForm.querySelector('#timein');
const timeOut = getForm.querySelector('#timeout');

const pristine = new Pristine(getForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
});

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

const minPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
function validatePrice(value) {
  const type = getForm.querySelector('[name="type"]');
  return value.length && parseInt(value, 10) >= minPrices[type.value];
}
function getPriceErrorMessage () {
  const type = getForm.querySelector('[name="type"]');
  return `минимальная цена за ночь ${minPrices[type.value]}`;
}

function onUnitChange () {
  priceField.placeholder = minPrices[this.value];
  pristine.validate(priceField);
}
getForm
  .querySelectorAll('[name="type"]')
  .forEach((item) => item.addEventListener('change', onUnitChange));

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

// Добавляем валидатор для проверки полей
pristine.addValidator(
  getForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);
pristine.addValidator(priceField, validatePrice, getPriceErrorMessage
);
pristine.addValidator(capacity, validateRoom, capacityRoomErrorMessage);

// Навешиваем обработчик на отправку формы
getForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    //console.log('Форма валидна. Отправляем данные на сервер.');
  } else {
    //console.log('Форма невалидна');
  }
});
