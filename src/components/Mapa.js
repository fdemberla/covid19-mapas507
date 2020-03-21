import React from "react";
import IframeResizer from "iframe-resizer-react";
import PaginaPrincipal from "./PaginaPrincipal";

const Mapa = ({ url }) => {
  return url !== "con" ? (
    <IframeResizer
      log
      src={url}
      style={{
        width: "1px",
        minWidth: "100%",
        height: "100vh"
      }}
    />
  ) : (
    <PaginaPrincipal />
  );
};

export default Mapa;
