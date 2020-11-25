/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Main from "./containers/Main";
import Output from "./containers/Output";
import { setConfigs } from "../redux/reducers/configsSlice";
import { setRoutes } from "../redux/reducers/routesSlice";

function App() {
  const dispatch = useDispatch();

  window.addEventListener("message", (event) => {
    console.log(event, "e<>");
    switch (event.data.command) {
      case "data":
        dispatch(setRoutes(event.data.data));

        break;
      case "config":
        dispatch(setConfigs(event.data.out));
        break;
      default:
    }
  });

  return (
    <div className="grid-container">
      <Output />
      <Main />
    </div>
  );
}

export default App;
