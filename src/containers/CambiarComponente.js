import React from "react";
import Mapa from "../components/Mapa";
import Indicadores from "../components/Indicadores";
import Informacion from "../components/Informacion";
import Sintomas from "../components/Sintomas";
import PaginaPrincipal from "../components/PaginaPrincipal";

const CambiarComponente = ({ report, darkMode }) => {
  switch (report) {
    case "mapa":
      return <Mapa />;
    case "informacion":
      return <Informacion />;
    case "indicadores":
      return <Indicadores />;
    case "sintomas":
      return <Sintomas />;
    default:
      return <PaginaPrincipal darkMode={darkMode} />;
  }
};

export default CambiarComponente;
