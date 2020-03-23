import React from "react";
import tendencia from "../media/tendencia.jpg";

const Tendencia = () => {
  return (
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-12 mx-auto">
          <img src={tendencia} className="img-fluid" alt="tendencia" />
        </div>
      </div>
    </div>
  );
};

export default Tendencia;
