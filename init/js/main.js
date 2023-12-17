import './statepage.js';
import './form.js';
import { createMarkers, initMap } from './map.js';
//import { getOffer } from './data.js';
import { getData } from './api.js';
import { setInactiveState } from './statepage.js';

const MAX_OFFERS = 10;

const onMapLoad = () => {
  getData()
    .then((offers) => {
      createMarkers(offers.slice(0,MAX_OFFERS));
    });
};

setInactiveState();

initMap(onMapLoad);
