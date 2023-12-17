import { setActiveState } from './statepage.js';
import { createOfferCard } from './popupcard.js';

const address = document.querySelector('#address');

const DEFAULT_LAT = 35.6895; // Координаты центра Токио
const DEFAULT_LNG = 139.69212;
const ZOOM_DEFAULT = 12;

const mainPinIcon = L.icon({
  iconUrl: '/init/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: '/init/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [26, 40],
});

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);
const clearMarkers = () => markerGroup.clearLayers();

//Реализация меток предложений
const renderMarker = (offer) => {
  const {location} = offer;
  const marker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: pinIcon,
    },
  );
  marker
    .addTo(markerGroup)
    .bindPopup(createOfferCard(offer));
};

const createMarkers = (points) => {
  points.forEach((point) => {
    renderMarker(point);
  });
};

const mainPinMarker = L.marker(
  {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  },
  {
    icon: mainPinIcon,
    draggable: true,
  },
);
// Функция инициализации карты
const initMap = () => {
  map.on('load', () => {
    setActiveState();
  })
    .setView({
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    }, ZOOM_DEFAULT);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',},
  ).addTo(map);
  address.value = `${DEFAULT_LAT},${DEFAULT_LNG}`;
  mainPinMarker.addTo(map);
  mainPinMarker.on('move', (evt) => {
    const newCoordinates = evt.target.getLatLng();
    address.value = `${newCoordinates.lat.toFixed(5)}, ${newCoordinates.lng.toFixed(5)}`;
  });
};

//Сброс настроек карты до начальных значений
const resetMap = () => {
  address.value = `${DEFAULT_LAT},${DEFAULT_LNG}`;
  mainPinMarker.setLatLng({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  });
  map.setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, ZOOM_DEFAULT);
  map.closePopup();
};


// Вызываем функцию инициализации карты
export {initMap, createMarkers, resetMap, clearMarkers};
