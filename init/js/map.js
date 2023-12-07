import { setActiveState } from './statepage.js';
import { createOfferCard } from './popupcard.js';

const address = document.querySelector('#address');

const DEFAULT_COORDINATES = [35.6895, 139.6917]; // Координаты центра Токио
const map = L.map('map-canvas');
//главная метка с иконкой
const mainPinIcon = L.icon({
  iconUrl: '/init/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(
  DEFAULT_COORDINATES,
  {
    icon: mainPinIcon,
    draggable: true,
  },
);

// Функция инициализации карты
function initMap() {
  map.on('load', () => {
    setActiveState();
  })
    .setView(DEFAULT_COORDINATES, 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',},
  ).addTo(map);
}
// Инициализация главное метки с возможностью перетаскивания и фиксацией новых координат
const initPinMarker = () => {
  mainPinMarker.addTo(map);
  const getNewCoordinates = (coordinates) => {
    address.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
  };
  mainPinMarker.on('moveend', (evt) => {
    const newCoordinates = evt.target.getLatLng();
    getNewCoordinates(newCoordinates);
  });
};

initPinMarker();

//Реализация меток предложений
const markerGroup = L.layerGroup().addTo(map);
const pinIcon = L.icon({
  iconUrl: '/init/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [26, 40],
});
const createMarker = (points) => {
  points.forEach((point) => {
    const {lat, lng} = point;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: pinIcon,
      },
    );
    marker
      .addTo(markerGroup)
      .bindPopup(createOfferCard(point));
  });
};

// Вызываем функцию инициализации карты
export {initMap, createMarker};
