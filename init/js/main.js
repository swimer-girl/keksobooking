import './statepage.js';
import './form.js';
import { createMarkers} from './map.js';
import { getData } from './api.js';
import { createCardElement } from './popupcard.js';
import { setFilterListener } from './filter.js';
import { setPhotoListeners } from './photo.js';

getData((serverData) => {
  serverData.forEach((offer) => {
    createMarkers(serverData, createCardElement(offer));
    setFilterListener(serverData);
  });
});

setPhotoListeners();

