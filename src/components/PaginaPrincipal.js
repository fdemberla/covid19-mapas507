import React from "react";

const PaginaPrincipal = ({ darkMode }) => {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark">
      <div className="container">
        <h1 className="display-4">Bienvenidos!</h1>
        <p className="lead">
          Seleccione uno de los enlaces en la barra superior!
        </p>
      </div>
    </div>
  );
};

export default PaginaPrincipal;
