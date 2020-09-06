import React from "react";
import "./App.css";
import SudokuMain from "./components/SudokuMain";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <SudokuMain></SudokuMain>
    </Provider>
  );
}

export default App;
