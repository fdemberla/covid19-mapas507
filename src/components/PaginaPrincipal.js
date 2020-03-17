import React from "react";

const PaginaPrincipal = ({ darkMode }) => {
  return (
    <div
      className={`jumbotron jumbotron-fluid ${
        !darkMode ? "bg-light" : "bg-dark"
      }`}
    >
      <div className="container">
        <h1 className="display-4">Bienvenidos!</h1>
        <p className="lead">
          Seleccione uno de los enlaces en la barra lateral!
        </p>
      </div>
    </div>
  );
};

export default PaginaPrincipal;
