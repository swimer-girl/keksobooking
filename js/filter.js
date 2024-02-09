import { createMarkers, clearMarkers } from './map.js';
import { debounce } from './util.js';

const mapFilters = document.querySelector('.map__filters');
const housingType = document.querySelector('#housing-type');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingPrice = document.querySelector('#housing-price');
const featuresFilter = document.querySelectorAll('[name=features]');


const MAX_MARKERS = 10;
const DEFAULT_VALUE = 'any';
const TIMEOUT_DELAY = 500;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const price = {
  any: () => true,
  middle: (value) => value >= LOW_PRICE && value <= HIGH_PRICE,
  low: (value) => value <= LOW_PRICE,
  high: (value) => value >= HIGH_PRICE,
};

const isDefault = (selectValue) => selectValue.value === DEFAULT_VALUE;

const filterOfferElement = (offer, housing) => offer === Number(housing.value) || isDefault(housing);

const filterByType = (offer) => offer.type === housingType.value || isDefault(housingType);
const filterByRooms = (offer) => filterOfferElement(offer.rooms, housingRooms);
const filterByGuests = (offer) => filterOfferElement(offer.guests, housingGuests);
const filterByPrice = (offer, checkPriceFn) => checkPriceFn(offer.price) || isDefault(housingPrice);
const filterByFeatures = ({features}, checkedFeatures) => {
  if (!checkedFeatures.length) {
    return true;
  }

  return features && checkedFeatures.every((element) => features.includes(element.value));
};

const setOffersFilter = (offers) => {
  const checkPriceFn = price[housingPrice.value];
  const checkedFeatures = [...featuresFilter].filter((feature) => feature.checked);

  return offers.filter(({offer}) => (
    filterByType(offer) &&
    filterByRooms(offer) &&
    filterByGuests(offer) &&
    filterByPrice(offer, checkPriceFn) &&
    filterByFeatures(offer, checkedFeatures)));
};

const setFiltersOffers = (offers) => {
  clearMarkers();
  const filterData = setOffersFilter(offers);
  createMarkers(filterData.slice(0, MAX_MARKERS));
};

const resetFilters = () => mapFilters.reset();

const setFilterListener = (offers) => {
  mapFilters.addEventListener('change', debounce(() => setFiltersOffers(offers), TIMEOUT_DELAY));
  mapFilters.addEventListener('reset', debounce(() => setFiltersOffers(offers), TIMEOUT_DELAY));
};

export { setFilterListener, resetFilters };

