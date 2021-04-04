import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/main.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
