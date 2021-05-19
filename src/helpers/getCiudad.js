import { lugares } from '../data/transporte.json';

const getCiudad = (value = "") => {
  if (value === "") {
    return [];
  }
  return lugares.filter((lugar) => lugar.ciudad.includes(value));
};

export default getCiudad;
