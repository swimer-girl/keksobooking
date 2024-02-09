const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fieldsTypeFile = document.querySelectorAll ('.ad-form input[type=file]');
const previewAvatar = document.querySelector ('.ad-form-header__preview img');
const previewPhotoHouse = document.querySelector ('.ad-form__photo');

const setPhotoListeners = () => {
  fieldsTypeFile.forEach((element) => {
    element.addEventListener('change', () => {
      const file = element.files[0];
      const fileName = file.name.toLowerCase();

      const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

      if (matches && element.classList.contains('ad-form-header__input')) {
        previewAvatar.src = URL.createObjectURL(file);
      }

      if (matches && element.classList.contains('ad-form__input')) {
        const imgHouse = document.createElement('img');
        imgHouse.style.width = '100%';
        imgHouse.style.height = '100%';
        imgHouse.src = URL.createObjectURL(file);
        previewPhotoHouse.appendChild(imgHouse);
      }
    });
  });
};

const resetPreviews = () => {
  previewPhotoHouse.innerHTML = '';
  previewAvatar.src = 'img/muffin-grey.svg';
};

export { setPhotoListeners, resetPreviews };
