//import { createOfferCard } from './popupcard.js';

const adForm = document.querySelector('.ad-form');
const fielsets = document.querySelectorAll('.ad-form__element');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersList = document.querySelectorAll('.map__filter');


const setInactiveState = () => {
  // Заблокировать интерактивные элементы формы .ad-form
  adForm.classList.add('ad-form--disabled');
  fielsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  // Заблокировать интерактивные элементы формы .map__filters
  mapFiltersForm.classList.add('map__filters--disabled');
  mapFiltersList.forEach((filter) => {
    filter.disabled = true;
  });

  // Заменить содержимое блока карты серым прямоугольником
  const mapCanvas = document.querySelector('#map-canvas');
  mapCanvas.style.backgroundColor = 'grey';

  // Блокировать слайдер (если есть)
  // Например, если у вас есть слайдер с классом .slider, то можно сделать следующим образом:
  const slider = document.querySelector('.slider');
  if (slider) {
    slider.disabled = true;
  }
};

// Вызовите функцию при загрузке страницы или в нужный момент
//setInactiveState();
document.addEventListener('DOMContentLoaded', setInactiveState);
/* function closeForm () {
  //clearOfferCards();
  document.addEventListener('DOMContentLoaded', setInactiveState);
}
closeForm(); */

// Стрелочная функция для активного состояния страницы
const setActiveState = () => {
  // Разблокировать интерактивные элементы формы .ad-form
  adForm.classList.remove('ad-form--disabled');
  fielsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });

  // Разблокировать интерактивные элементы формы .map__filters
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFiltersList.forEach((filter) => {
    filter.disabled = false;
  });

  // Восстановить цвет блока карты
  const mapCanvas = document.querySelector('#map-canvas');
  mapCanvas.style.backgroundColor = '';

  // Разблокировать слайдер (если есть)
  const slider = document.querySelector('.slider');
  if (slider) {
    slider.disabled = false;
  }
};

// Стрелочная функция для инициализации карты
const initMap = () => {
  // Ваш код для инициализации карты с использованием Leaflet

  // После успешной инициализации карты вызываем setActiveState
  setActiveState();
};

// Вызовите функцию initMap при загрузке страницы
document.addEventListener('DOMContentLoaded', initMap);
