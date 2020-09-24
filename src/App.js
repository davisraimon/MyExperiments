import React from "react";
import "./App.css";
import SudokuMain from "./components/sudokusolver/SudokuMain";
import SentimentMain from "./components/sentimentanalysis/SentimentMain";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/solvesudoku" component={SudokuMain}></Route>
          <Route path="/sentimentanalysis" component={SentimentMain}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
