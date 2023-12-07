import './map.js';
import './statepage.js';
import './form.js';
import { createMarker } from './map.js';
import { getOffer } from './data.js';

getOffer(createMarker());
