import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  NavLink
} from "react-router-dom";
import CambiarComponente from "./containers/CambiarComponente";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./App.css";

// Firebase config object!

import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7BRm5Y7gwaMn1LUTkN-0VKtP3hlM3fDU",
  authDomain: "covid19-mapas507.firebaseapp.com",
  databaseURL: "https://covid19-mapas507.firebaseio.com",
  projectId: "covid19-mapas507",
  storageBucket: "covid19-mapas507.appspot.com",
  messagingSenderId: "611311004955",
  appId: "1:611311004955:web:9b209e03aaa1ca4f1937be",
  measurementId: "G-BNLL51PZ6R"
};

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
      name: "Mapa de Panama",
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
    }
  ];

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ height: "90vh" }}>
        <CambiarComponente links={links} report={query.get("report")} />
      </div>
      <nav className="navbar fixed-bottom navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          @covid19_mapas507
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
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
              <NavLink
                onClick={() => setShow(false)}
                className={
                  query.get("report") === "Tendencia"
                    ? "btn btn-primary"
                    : `nav-link`
                }
                to={`?report=Tendencia`}
              >
                Tendencia
              </NavLink>
            </li>
            <hr />
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
    </div>
  );
}
