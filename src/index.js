import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore } from "redux";
import { Provider } from 'react-redux'
import productsReducer from './reducers/productsReducer'
import userReducer from './reducers/userReducer'





const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});
const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Jordan"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App aRandomProps="whatever"/></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
