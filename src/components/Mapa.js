import React from "react";
import IframeResizer from "iframe-resizer-react";

const Mapa = ({ url }) => {
  return (
    <IframeResizer
      log
      src={url}
      style={{
        width: "1px",
        minWidth: "100%",
        height: "100vh"
      }}
    />
  );
};

export default Mapa;
