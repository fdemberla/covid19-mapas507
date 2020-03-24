import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  NavLink
} from "react-router-dom";
import CambiarComponente from "./containers/CambiarComponente";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import firebaseConfig from "./.firebase/firebaseConfig.js";

import "./App.css";

// Firebase config object!

import * as firebase from "firebase/app";

firebase.initializeApp(firebaseConfig);

// React Router does not have any opinions about
// how you should parse URL query strings.
//
// If you use simple key=value query strings and
// you do not need to support IE 11, you can use
// the browser's built-in URLSearchParams API.
//
// If your query strings contain array or object
// syntax, you'll probably need to bring your own
// query parsing function.

export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  const [show, setShow] = useState(false);
  let query = useQuery();

  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

  //List of links for the reports.

  const links = [
    {
      name: "Mapa de Panamá",
      query: "MapaPanama",
      url:
        "https://covid19mapas507.maps.arcgis.com/apps/Minimalist/index.html?appid=305371ffbcec4395a80d5e61c2d23295  "
    },
    {
      name: "Indicadores Totales",
      query: "IndicadoresTotales",
      url:
        "https://covid19mapas507.maps.arcgis.com/apps/opsdashboard/index.html#/1aae66bb3686454296682a05ec102349"
    },
    {
      name: "Mapa Mundial",
      query: "MapaMundial",
      url:
        "https://covid19mapas507.maps.arcgis.com/apps/Minimalist/index.html?appid=42bd7037b4694a94953ef5eb16727541"
    },
    {
      name: "Tendencia",
      query: "Tendencia",
      url:
        "https://covid19mapas507.maps.arcgis.com/apps/opsdashboard/index.html#/0f4e4c1894ca4db88c91e6c49501e564"
    }
  ];

  return (
    <div style={{ height: "100vh" }}>
      <nav className="navbar top navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          @covid19_mapas507
        </a>
        <button
          className="btn btn-danger"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
        >
          Menú
        </button>
        <div
          className={`${show ? "" : "collapse"} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {links.map((link, index) => {
              return (
                <li key={index} className="nav-item">
                  <NavLink
                    onClick={() => setShow(false)}
                    className={
                      query.get("report") === link.query
                        ? "btn btn-primary"
                        : `nav-link`
                    }
                    to={`?report=${link.query}`}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com/covid19_mapas507/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ height: "90vh" }}>
        <CambiarComponente links={links} report={query.get("report")} />
      </div>
    </div>
  );
}
