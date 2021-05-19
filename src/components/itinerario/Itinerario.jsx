import './itinerario.css';

const Itinerario = ({ transporte, origen, destino }) => {
  return (
    <>
      <div className="imgOrigen">
        {origen.length !== 0 &&
          origen.map(({ id, ciudad, imagen }) => (
            <img
              className="animate__animated animate__zoomIn"
              key={id}
              src={imagen}
              alt={ciudad}
            />
          ))}
      </div>
      <div>
        {transporte.length !== 0 &&
          transporte.map(({ id, icono }) => (
            <i
              key={id}
              className={`${icono} animate__animated animate__lightSpeedInLeft`}
            ></i>
          ))}
      </div>
      <div className="imgDestino">
        {destino.length !== 0 &&
          destino.map(({ id, ciudad, imagen }) => (
            <img
              className="animate__animated animate__zoomIn"
              key={id}
              src={imagen}
              alt={ciudad}
            />
          ))}
      </div>
    </>
  );
};

export default Itinerario;
