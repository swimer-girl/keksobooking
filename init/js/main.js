import './statepage.js';
import './form.js';
import { createMarkers} from './map.js';
import { getData } from './api.js';
import { createCardElement } from './popupcard.js';

// const MAX_OFFERS = 10;

// getData((offers) => {
//   offers.slice(0, MAX_OFFERS).forEach ((offer) => {
//     createMarkers(offer, createCardElement(offer));
//   });
// });

getData((serverData) => {
  serverData.forEach((offer) => {
    createMarkers(serverData, createCardElement(offer));
  });
});
