import { useEffect, useMemo, useState } from "react";
import { transportes, lugares } from "../../data/transporte.json";
import getCiudad from "../../helpers/getCiudad";
import getTransporte from "../../helpers/getTransporte";

const Calcular = () => {
  let loading=false;
  let cdd;
  const [prueba, setPrueba] = useState([]);
  const [tipo, setTipo] = useState("");
  const [ciudadOr, setCiudadOr] = useState("");
  const [ciudadDe, setCiudadDe] = useState("");

  const tipoChange = () => {
    const tSelect = document.getElementById("tipo").value;
    setTipo(tSelect);
  };

  const origenChange = () => {
    const oSelect = document.getElementById("origen").value;
    setCiudadOr(oSelect);
  };

  const destinoChange = () => {
    const dSelect = document.getElementById("destino").value;
    setCiudadDe(dSelect);
  };
  
  const handleConsultar = () => {
  };
  switch (ciudadDe) {
    case "0":
      cdd='Lima';
      break;
      case "1":
        cdd='Cusco';
        break;
        case "2":
          cdd='Piura';
          break;
          case "3":
            cdd='Tumbes';
            break;
            case "4":
              cdd='ayacucho';
              break;
              case "5":
                cdd='Ica';
                break;
  
    default:
      break;
  }
  const url=`http://api.openweathermap.org/data/2.5/weather?q=${cdd}&appid=d6092cbc3f811a0d667555db72e0d8ce`;

useEffect(() => {
  fetch(url)
    .then(response => response.json())  
    .then(data => setPrueba(data.main))
}, [url])

console.log(prueba);

  const transporteFilter = useMemo(() => getTransporte(tipo), [tipo]);
  const ciudadFilterOr = useMemo(() => getCiudad(ciudadOr), [ciudadOr]);
  const ciudadFilterDe = useMemo(() => getCiudad(ciudadDe), [ciudadDe]);
  return (
    <div className="containerCalc calcSection">
      <p className="tituloCalc">Infórmese de su siguiente destino</p>
      <div className="tipoInput">
        <label htmlFor="tipo">Tipo de transporte:</label>
        <select id="tipo" name="tipo" onChange={tipoChange}>
          <option>- Seleccionar -</option>
          {transportes.map(({ id, tipo }) => (
            <option key={id} value={id}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="origenInput">
        <label htmlFor="origen">Lugar de origen:</label>
        <select id="origen" name="origen" onChange={origenChange}>
          <option>- Seleccionar -</option>
          {lugares.map(({ id, ciudad }) => (
            <option key={id} value={id}>
              {ciudad}
            </option>
          ))}
        </select>
      </div>

      <div className="destinoInput">
        <label htmlFor="destino">Lugar de destino:</label>
        <select id="destino" name="destino" onChange={destinoChange}>
          <option>- Seleccionar -</option>
          {lugares.map(({ id, ciudad }) => (
            <option key={id} value={id}>
              {ciudad}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-consultar" onClick={handleConsultar}>
        {loading ? (
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        ) : (
          "Consultar"
        )}
      </button>

      {ciudadFilterOr.length === 0 ? (
        ""
      ) : (
        <div className="imgOrigen">
          {ciudadFilterOr.map(({ id, ciudad, imagen }) => (
            <img
              className="animate__animated animate__zoomIn"
              key={id}
              src={imagen}
              alt={ciudad}
            />
          ))}
        </div>
      )}

      {ciudadFilterDe.length === 0 ? (
        ""
      ) : (
        <>
          {transporteFilter.length === 0
            ? ""
            : transporteFilter.map(({ id, icono }) => (
                <i
                  key={id}
                  className={`${icono} animate__animated animate__lightSpeedInLeft`}
                ></i>
              ))}
          <div className="imgDestino">
            {ciudadFilterDe.map(({ id, ciudad, imagen }) => (
              <img
                className="animate__animated animate__zoomIn"
                key={id}
                src={imagen}
                alt={ciudad}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Calcular;

