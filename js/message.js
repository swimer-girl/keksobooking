const successMessage = document.querySelector ('#success')
  .content
  .querySelector('.success')
  .cloneNode(true);
const errorMessage = document.querySelector ('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);
const closeButton = errorMessage.querySelector ('.error__button');

const onEscClose = (evt) => {
  if (evt.code === 'Escape') {
    removeSuccessMessageForm();
    removeErrorMessageForm();
    document.removeEventListener('keydown',onEscClose);
  }
};

const onCloseButton = () => removeErrorMessageForm();


const onClickOverlay = () => {
  removeSuccessMessageForm();
  removeErrorMessageForm();
  document.removeEventListener('click', onClickOverlay);
  document.removeEventListener('keydown',onEscClose);
};

const createSuccessMessageForm = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown',onEscClose);
  document.addEventListener('click', onClickOverlay);
};

function removeSuccessMessageForm () {
  successMessage.remove();
}

const createErrorMessageForm = () => {
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown',onEscClose);
  document.addEventListener('click', onClickOverlay);
  closeButton.addEventListener('click', onCloseButton);
};

function removeErrorMessageForm () {
  errorMessage.remove();
}

export { createSuccessMessageForm, createErrorMessageForm };
