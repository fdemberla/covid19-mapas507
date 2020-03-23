import React from "react";
import Mapa from "../components/Mapa";
import { Redirect } from "react-router-dom";
import Tendencia from "../components/Tendencia";

const CambiarComponente = ({ links, report }) => {
  return report === "Tendencia" ? (
    <Tendencia />
  ) : report ? (
    links
      .filter(query => query.query === report)
      .map((result, i) => <Mapa key={i} url={result.url} />)
  ) : (
    <Redirect to={{ search: "?report=MapaPanama" }} />
  );
};

export default CambiarComponente;
