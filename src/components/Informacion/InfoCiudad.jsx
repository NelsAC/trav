import getDistancia from "../../helpers/getDistancia";

const InfoCiudad = ({ origen, destino }) => {
  const {
    coord: { lon: lon1, lat: lat1 },
  } = origen;
  const {
    name,
    main: { temp, temp_max, temp_min, humidity },
    coord: { lon: lon2, lat: lat2 },
  } = destino;

  const distancia = getDistancia(lat1, lon1, lat2, lon2);
  return (
    <>
      <h4>Resultados para {name}</h4>
      <p>
        &#9925; Temperatura actual: <span>{(temp - 273).toFixed(1)}º</span>
      </p>
      <p>
        &#127780; Temperatura máxima del día:{" "}
        <span>{(temp_max - 273).toFixed(1)}º</span>
      </p>
      <p>
        &#127780; Temperatura mínima del día:{" "}
        <span>{(temp_min - 273).toFixed(1)}º</span>
      </p>
      <p>
        &#128167; Humedad: <span>{humidity}%</span>
      </p>
      <p>
        &#12336; Distancia entre ambas ciudades:{" "}
        <span>{distancia.toFixed(1)} Km</span>
      </p>
    </>
  );
};

export default InfoCiudad;
