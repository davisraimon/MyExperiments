import { CLEAR, SET_INPUT, SOLVE_SUDOKU, HIGHLIGHT_CELL } from "./types";
import axios from "axios";

export const clearGrid = () => (dispatch) => {
  dispatch({ type: CLEAR });
};

export const solveSudoku = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post("/solve", data, config);
  dispatch({ type: SOLVE_SUDOKU, payload: res.data });
};

export const setInput = (x, y, value) => (dispatch) => {
  dispatch({ type: SET_INPUT, payload: { x, y, value } });
};

export const setHighlight = (x, y) => (dispatch) => {
  dispatch({ type: HIGHLIGHT_CELL, payload: { x, y } });
};
