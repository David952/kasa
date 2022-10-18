import Housings from '../../api/logements.json';

export function getHousings() {
  let housings = Housings;
  if (!housings) housings = [];
  return housings;
}

export function getHousing(id) {
  let housings = Housings;
  let housing = housings.find(housing => housing.id === id);
  return housing ?? null;
}