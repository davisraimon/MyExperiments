import {
  CLEAR,
  SET_INPUT,
  SOLVE_SUDOKU,
  HIGHLIGHT_CELL,
} from "../actions/types";
const initialState = {
  input: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  result: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  highlighted: [
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
  ],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CLEAR:
      return {
        input: initialState.input,
        result: initialState.result,
        highlighted: initialState.highlighted,
      };
    case SET_INPUT:
      return {
        ...state,
        input: state.input.map((innerArray, index) => {
          if (index === payload.x) {
            return innerArray.map((value, index) => {
              if (index === payload.y) {
                return payload.value;
              } else {
                return value;
              }
            });
          } else {
            return innerArray;
          }
        }),
      };
    case SOLVE_SUDOKU:
      return { ...state, result: payload };

    case HIGHLIGHT_CELL:
      return {
        ...state,
        highlighted: initialState.highlighted.map((innerRow, indexRow) => {
          if (indexRow === payload.x) {
            return [true, true, true, true, true, true, true, true, true];
          } else {
            return innerRow.map((cell, indexColumn) => {
              const box_x = Math.floor(payload.x / 3);
              const box_y = Math.floor(payload.y / 3);

              if (indexColumn === payload.y) {
                return true;
              } else if (
                (indexRow === box_x * 3 ||
                  indexRow === box_x * 3 + 1 ||
                  indexRow === box_x * 3 + 2) &&
                (indexColumn === box_y * 3 ||
                  indexColumn === box_y * 3 + 1 ||
                  indexColumn === box_y * 3 + 2)
              ) {
                return true;
              } else {
                return false;
              }
            });
          }
        }),
      };
    default:
      return { ...state };
  }
}
