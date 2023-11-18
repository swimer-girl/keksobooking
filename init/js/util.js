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

export {getRandomFloat};
export {getRandomPositiveInteger};
export {getRandomArrayElement};
export {getNewArray};
