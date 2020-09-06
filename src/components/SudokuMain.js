import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearGrid, solveSudoku } from "../actions/grid";
import Grid from "./Grid";
import "./Grid.css";

const data = {
  input: [
    [0, 0, 0, 1, 0, 5, 0, 6, 8],
    [0, 0, 0, 0, 0, 0, 7, 0, 1],
    [9, 0, 1, 0, 0, 0, 0, 3, 0],
    [0, 0, 7, 0, 2, 6, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 8, 7, 0, 4, 0, 0],
    [0, 3, 0, 0, 0, 0, 8, 0, 5],
    [1, 0, 5, 0, 0, 0, 0, 0, 0],
    [7, 9, 0, 4, 0, 1, 0, 0, 0],
  ],
};

const Main = ({ setGrid, clearGrid, solveSudoku, grid: { input } }) => {
  return (
    <>
      <div className="App">
        <h3>Sudoku</h3>
        <button className="btn btn-primary" onClick={() => clearGrid()}>
          Clear
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            solveSudoku(input);
          }}
        >
          Solve
        </button>
        <div className="solver-board-container">
          <div className="solver-board">
            <Grid type="input"></Grid>
          </div>
          <div className="solver-board">
            <Grid type="result"></Grid>
          </div>
        </div>
      </div>
    </>
  );
};

Main.propTypes = {
  clearGrid: PropTypes.func.isRequired,
  solveSudoku: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  grid: state.grid,
});
export default connect(mapStateToProps, { clearGrid, solveSudoku })(Main);
