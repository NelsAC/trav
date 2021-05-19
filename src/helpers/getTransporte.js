import { transportes } from '../data/transporte.json';

const getTransporte = (id = "") => {
  if (id === "") {
    return [];
  }
  return transportes.filter((transporte) => transporte.id.includes(id));
};

export default getTransporte;
