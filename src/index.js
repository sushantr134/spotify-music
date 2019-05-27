import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import App from "./app/App";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

import "@babel/polyfill";

WebFont.load({
  google: {
    families: ["Raleway", "Baloo Bhai", "Roboto", "sans-serif", "cursive"]
  }
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("spotify-app-root")
);

process.env.NODE_ENV === "development" && module.hot.accept();
