import { NavLink } from "react-router-dom";
import imgInfo from "../../img/infoImg.jpg";

import "./home.css";

const Home = () => {
  return (
    <main className="container">
      <div className="information">
        <h2>
          Revisa la <span>Información</span> de los lugares que deseas visitar
        </h2>
        <h3>
          Podrás encontrar información como el tiempo, el clima, la distancia
          entre los lugares y mucho más.
        </h3>
      </div>

      <img className="imgInfo" src={imgInfo} alt="img" />
      <NavLink className="btn" exact to="/calcular">
        Iniciar
      </NavLink>
    </main>
  );
};

export default Home;
