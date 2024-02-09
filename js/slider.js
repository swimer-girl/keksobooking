const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const MAX_VALUE = 100000;

noUiSlider.create(sliderElement, {
  start: 0,
  step: 1000,
  range: {
    min: 0,
    max: MAX_VALUE,
  },
});
sliderElement.noUiSlider.on('update', () => {
  valueElement.value = parseInt(sliderElement.noUiSlider.get(), 10);
});

const updateSlider = (value) => {
  sliderElement.noUiSlider.set(value);
};

const resetSlider = () => {
  sliderElement.noUiSlider.reset();
};

export { updateSlider, resetSlider };
