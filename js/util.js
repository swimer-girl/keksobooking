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
};

const checkLenghtString = (string, length) => string.length <= length;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getNewArray = (array) => {
  const arr = Array.from(array);
  const arrayNew = new Array(getRandomPositiveInteger(1, arr.length));

  for (let i = 0; i < arrayNew.length; i++) {
    arrayNew[i]=arr.splice(getRandomPositiveInteger(0, arr.length-1), 1).join();
  }
  return arrayNew;
};

// Функция для создания и показа сообщения об ошибке с задержкой
const ALERT_SHOW_TIME = 5000;
const errorMessageTemplate = document.querySelector('#error-message');

const showAlert = () => {
  //const errorMessage = errorMessageTemplate.content.cloneNode(true);
  //document.body.append(errorMessage);
  const errorMessageFragment = errorMessageTemplate.content.cloneNode(true);
  const errorMessage = errorMessageFragment.firstElementChild; // Преобразование фрагмента в элемент
  document.body.append(errorMessage);
  // Скрытие сообщения через 5 секунд
  setTimeout(() => {
    errorMessage.remove();
  }, ALERT_SHOW_TIME);
};

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_throttle

function throttle (callback, delayBetweenFrames) {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {getRandomFloat, getRandomPositiveInteger, getRandomArrayElement, getNewArray, showAlert, debounce, throttle, checkLenghtString};
