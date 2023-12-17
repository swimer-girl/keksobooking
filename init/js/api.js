import {showAlert} from './util.js';
const getData = (onSuccess) => {
  fetch ('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка получения данных, перезагрузите страницу');
    })
    .then((serverData) => onSuccess(serverData))
    .catch((error) => {
      showAlert(error);
    });
};

const sendData = async (onSuccess, onFail, body) => {
  fetch('https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    }).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  }).catch((error) => onFail(error.message));
};

export {getData, sendData};
