import React from "react";
import {
  BrowserRouter as Router,
  useLocation,
  NavLink
} from "react-router-dom";
import CambiarComponente from "./containers/CambiarComponente";

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
  let query = useQuery();

  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

  //List of links for the reports.

  const links = [
    {
      name: "Mapa de Panama",
      query: "MapaPanama",
      url:
        "https://maps.arcgis.com/apps/MapSeries/index.html?appid=253d4d4684784925879d536150427f02"
    },
    {
      name: "Indicadores Totales",
      query: "IndicadoresTotales",
      url:
        "https://maps.arcgis.com/apps/MapSeries/index.html?appid=253d4d4684784925879d536150427f02"
    },
    {
      name: "Indicadores de Variacion",
      query: "IndicadoresVariacion",
      url:
        "https://maps.arcgis.com/apps/MapSeries/index.html?appid=253d4d4684784925879d536150427f02"
    },
    {
      name: "Mapa LATAM",
      query: "MapaLatam",
      url:
        "https://maps.arcgis.com/apps/MapSeries/index.html?appid=253d4d4684784925879d536150427f02"
    },
    {
      name: "Tendencia",
      query: "Tendencia",
      url:
        "https://maps.arcgis.com/apps/MapSeries/index.html?appid=253d4d4684784925879d536150427f02"
    },
    {
      name: "Mapa por Region",
      query: "MapaPorRegion",
      url:
        "https://maps.arcgis.com/apps/MapSeries/index.html?appid=253d4d4684784925879d536150427f02"
    }
  ];

  return (
    <>
      <div className="container text-center">
        <h1>COVID-19 Panama</h1>
        <h1>Redes Sociales</h1>
      </div>
      <br />
      <ul className="nav justify-content-center">
        {links.map((link, index) => {
          return (
            <li key={index} className="nav-item">
              <NavLink
                className={
                  query.get("report") === link.query
                    ? "btn btn-secondary"
                    : `nav-link`
                }
                to={`?report=${link.query}`}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <br />
      <div style={{ height: "100vh" }}>
        <CambiarComponente links={links} report={query.get("report")} />
      </div>
    </>
  );
}
