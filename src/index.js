import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import adminReducer from "./store/reducer/adminReducer";
import productsReducer from "./store/reducer/productsReducer";
import userReducer from "./store/reducer/userReducer";

import App from "./App";
import "./index.css";

// REDUX MAGIC
//! MIDDLE WARE
const logger = (store) => {
  return (next) => {
    return (action) => {
      return next(action);
    };
  };
};

const rootReducer = combineReducers({
  adminReducer: adminReducer,
  productsReducer: productsReducer,
  userReducer: userReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
