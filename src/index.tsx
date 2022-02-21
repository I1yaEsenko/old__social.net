import React from 'react';
import 'normalize.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


let rerenderEntireTree = () => {
  ReactDOM.render(
    //@ts-ignore
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)


reportWebVitals();
