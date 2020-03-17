import React, { useState, useEffect } from "react";
import "./App.css";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faMap,
  faInfo,
  faSign,
  faMedkit
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import CambiarComponente from "./containers/CambiarComponente";

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
  const [darkMode, changeMode] = useState(
    JSON.parse(localStorage.getItem("mode")) || false
  );
  const [show, setShow] = useState(true);
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
  }, [darkMode]);

  //List of links for the reports.

  const links = [
    { name: "Mapa", query: "mapa", icon: faMap },
    { name: "Informacion General", query: "informacion", icon: faInfo },
    { name: "Indicadores", query: "indicadores", icon: faSign },
    { name: "Sintomas", query: "sintomas", icon: faMedkit }
  ];

  return (
    <>
      <div id="wrapper" className={`bg-${darkMode ? "dark" : "light"}`}>
        <div id="nav" className={`bg-secondary text-white`}>
          <div className="clearfix">
            {show && <h3>Reports</h3>}
            <ul className="nav nav-pills flex-column">
              {links.map((link, i) => (
                <li key={i} className="nav-item">
                  <Link
                    className={`nav-link text-white ${
                      query.get("report") === link.query ? "active" : ""
                    }`}
                    to={`?report=${link.query}`}
                    data-tip={!show ? link.name : ""}
                  >
                    <FontAwesomeIcon icon={link.icon} />
                    {show && ` ${link.name}`}
                  </Link>
                </li>
              ))}
            </ul>
            <hr />
            {show && (
              <div className="container text-center">
                <h6>Modo Oscuro</h6>
                <Switch
                  onColor="#000000"
                  checked={darkMode}
                  onChange={() => changeMode(!darkMode)}
                  id="normal-switch"
                  width={120}
                />
              </div>
            )}
            <div className={`text-${show ? "right" : "center"} mt-5`}>
              <button
                className="btn btn-secondary"
                onClick={() => setShow(!show)}
              >
                <FontAwesomeIcon icon={show ? faCaretLeft : faCaretRight} />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`container-fluid bg-${
            darkMode ? "dark text-white" : "light"
          } overflow-auto`}
          style={{ position: "relative" }}
        >
          <CambiarComponente darkMode={darkMode} report={query.get("report")} />
        </div>
      </div>
      <ReactTooltip place="right" effect="solid" />
    </>
  );
}
