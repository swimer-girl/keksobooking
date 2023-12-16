import './statepage.js';
import './form.js';
import { createMarker } from './map.js';
import { getOffer } from './data.js';

getOffer(createMarker());
const getData = async (onSuccess) => {
  try {
    const response = await fetch ('https://25.javascript.pages.academy/keksobooking/data');

    if (!response.ok) {
      throw new Error('Не удалось загрузить обьявления');
    }
    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    //onFail(error.message);
  }
};

getData();
