/* Import statements */
import React from 'react';
import ReactDOM from 'react-dom';

/* App é o ponto de entrada para o código React.*/
import App from "./App";

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

