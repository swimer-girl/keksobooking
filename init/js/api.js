import {showAlert} from './util.js';
import { createSuccessMessageForm, createErrorMessageForm } from './message.js';
import { resetForm } from './form.js';

const getData = (onSuccess) => {
  fetch ('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      if(offers) {
        onSuccess(offers);
        //unlockMapFilters();
      }
    })
    .catch(() => {
      showAlert();
    });
};

const sendData = (body) => {
  console.log('Отправка данных на сервер');
  fetch('https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      console.log('Получен ответ от сервера:', response);
      if (response.ok) {
        //console.log('Данные успешно отправлены на сервер!');
        createSuccessMessageForm();
        resetForm();
      } else {
        //console.error('Ошибка при отправке данных на сервер:', response.status, response.statusText);
        createErrorMessageForm();
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке данных на сервер:', error.message);
      createErrorMessageForm();
    });
};

export {getData, sendData};
