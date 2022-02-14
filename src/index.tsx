import React from 'react';
import 'normalize.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} dispatch={store.dispatch}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)


reportWebVitals();
