import React from "react";
import Mapa from "../components/Mapa";
import PaginaPrincipal from "../components/PaginaPrincipal";

const CambiarComponente = ({ links, report }) => {
  return report ? (
    links
      .filter(query => query.query === report)
      .map((result, i) => <Mapa key={i} url={result.url} />)
  ) : (
    <PaginaPrincipal />
  );
};

export default CambiarComponente;
