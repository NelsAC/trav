import logo from "../../img/lg.png";
import { Link } from "react-router-dom";

import "./navegacion.css";

const Navegacion = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div>
        <a href="https://github.com/NelsonAlarcon/trav" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </header>
  );
};

export default Navegacion;
