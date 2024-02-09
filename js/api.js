import {showAlert} from './util.js';
import { createSuccessMessageForm, createErrorMessageForm } from './message.js';
import { resetForm } from './form.js';

const MAX_OFFERS =10;

const getData = (onSuccess) => {
  fetch ('https://25.javascript.htmlacademy.pro/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      if(offers) {
        //console.log('Данные успешно загружены:', offers);
        onSuccess(offers.slice(0, MAX_OFFERS));
        //onSuccess(offers);
        //unlockMapFilters();
      }
    })
    .catch(() => {
      //console.error('Ошибка при загрузке данных:', error);
      showAlert();
    });
};

const sendData = (body) => {
  fetch('https://25.javascript.htmlacademy.pro/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        //console.log('Данные успешно отправлены на сервер!');
        createSuccessMessageForm();
        resetForm();
      } else {
        //console.error('Ошибка при отправке данных на сервер:', response.status, response.statusText);
        createErrorMessageForm();
      }
    })
    .catch(() => {
      createErrorMessageForm();
    });
};

export {getData, sendData};
