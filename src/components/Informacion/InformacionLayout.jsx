import { useMemo, useState } from "react";
import { transportes, lugares } from "../../data/transporte.json";

import "./informacion.css";
import InfoResultado from "./InfoResultado";
import Itinerario from "../itinerario/Itinerario";
import getTransporte from "../../helpers/getTransporte";
import getCiudad from "../../helpers/getCiudad";

const InformacionLayout = () => {
  const [sub, setSub] = useState(false);
  const [tipo, setTipo] = useState("");
  const [ciudadOr, setCiudadOr] = useState("");
  const [ciudadDe, setCiudadDe] = useState("");
const [destinoActual, setDestinoActual] = useState("");
const [origenActual, setOrigenActual] = useState("");

  const handleChangeTransporte = (e) => {
    setTipo(e.target.value);
  };
  const handleChangeOrigen = (e) => {
    setCiudadOr(e.target.value);
  };
  const handleChangeDestino = (e) => {
    setCiudadDe(e.target.value);
  };

  const transporteFiltrado = useMemo(() => getTransporte(tipo), [tipo]);
  const ciudadOrigenFiltrada = useMemo(() => getCiudad(ciudadOr), [ciudadOr]);
  const ciudadDestinoFiltrada = useMemo(() => getCiudad(ciudadDe), [ciudadDe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tipo === "" || ciudadOr === "" || ciudadDe === "" || tipo ==="- Seleccionar -" || ciudadOr ==="- Seleccionar -" || ciudadDe ==="- Seleccionar -") {
      alert("Todos los campos son obligatorios");
    } else {
      setDestinoActual(ciudadDe);
      setOrigenActual(ciudadOr);
      setSub(true);
    }
  };
  return (
    <div className="containerCalc calcSection">
      <p className="tituloCalc">Infórmese de su siguiente destino</p>
      <div className="principal">
        <form onSubmit={handleSubmit}>
          <div className="origenInput">
            <label htmlFor="origen">Lugar de origen:</label>

            <select id="origen" name="origen" onChange={handleChangeOrigen}>
              <option>- Seleccionar -</option>
              {lugares.map(({ id, ciudad }) => (
                <option key={id} value={ciudad}>
                  {ciudad}
                </option>
              ))}
            </select>
          </div>

          <div className="destinoInput">
            <label htmlFor="destino">Lugar de destino:</label>

            <select id="destino" name="destino" onChange={handleChangeDestino}>
              <option>- Seleccionar -</option>
              {lugares.map(({ id, ciudad }) => (
                <option key={id} value={ciudad}>
                  {ciudad}
                </option>
              ))}
            </select>
          </div>

          <div className="tipoInput">
            <label htmlFor="tipo">Tipo de transporte:</label>

            <select id="tipo" name="tipo" onChange={handleChangeTransporte}>
              <option>- Seleccionar -</option>
              {transportes.map(({ id, tipo }) => (
                <option key={id} value={id}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-consultar" type="submit">
            Consultar
          </button>
          <div className="itinerario">
            <Itinerario
              transporte={transporteFiltrado}
              origen={ciudadOrigenFiltrada}
              destino={ciudadDestinoFiltrada}
            />
          </div>
        </form>
        {sub && <InfoResultado valueD={destinoActual} valueO={origenActual} />}
      </div>
    </div>
  );
};

export default InformacionLayout;
