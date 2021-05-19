import useFetch from "../../hooks/useFetch";
import InfoCiudad from "./InfoCiudad";

const InfoResultado = ({ valueD, valueO }) => {
  const {data:dataD, loading:loadD} = useFetch(valueD);
  const {data:dataO, loading:loadO} = useFetch(valueO);

  return (
    <div className="resultado animate__animated animate__fadeIn">
      {(!loadO && !loadD) ? (
        <InfoCiudad origen={dataO} destino={dataD}/>
      ) : (
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      )}
    </div>
  );
};

export default InfoResultado;
