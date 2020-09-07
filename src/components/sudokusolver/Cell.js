import React from "react";
import PropTypes from "prop-types";
import "./Cell.css";
import { connect } from "react-redux";
import { setInput, setHighlight } from "../../actions/grid";

const Cell = ({
  setInput,
  setHighlight,
  x,
  y,
  disabled,
  grid: { input, result, highlighted },
  type,
}) => {
  return (
    <>
      {type === "result" ? (
        <input
          disabled={true}
          maxLength={1}
          value={result[x][y] !== 0 ? result[x][y] : ""}
          className="cell"
        />
      ) : (
        <input
          disabled={disabled}
          maxLength={1}
          onClick={() => {
            setHighlight(x, y);
          }}
          value={input[x][y] !== 0 ? input[x][y] : ""}
          className={highlighted[x][y] ? "cell-highlighted" : "cell"}
          onChange={(e) => {
            if (e.target.value) {
              setInput(x, y, parseInt(e.target.value));
            } else {
              setInput(x, y, parseInt(0));
            }
          }}
        />
      )}
    </>
  );
};

Cell.propTypes = {
  grid: PropTypes.object.isRequired,
  setInput: PropTypes.func.isRequired,
  setHighlight: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  grid: state.grid,
});
export default connect(mapStateToProps, { setInput, setHighlight })(Cell);
