import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import "./Grid.css";

const Grid = (props) => {
  return (
    <>
      <div className="sudoku">
        <div className="sudoku-row">
          <div className="sudoku-box">
            <Box x={0} y={0} type={props.type} />
          </div>
          <div className="sudoku-box">
            <Box x={0} y={3} type={props.type} />
          </div>
          <div className="sudoku-box">
            <Box x={0} y={6} type={props.type} />
          </div>
        </div>
        <div className="sudoku-row">
          <div className="sudoku-box">
            <Box x={3} y={0} type={props.type} />
          </div>
          <div className="sudoku-box">
            <Box x={3} y={3} type={props.type} />
          </div>
          <div className="sudoku-box">
            <Box x={3} y={6} type={props.type} />
          </div>
        </div>
        <div className="sudoku-row">
          <div className="sudoku-box">
            <Box x={6} y={0} type={props.type} />
          </div>
          <div className="sudoku-box">
            <Box x={6} y={3} type={props.type} />
          </div>
          <div className="sudoku-box">
            <Box x={6} y={6} type={props.type} />
          </div>
        </div>
      </div>
    </>
  );
};

Grid.propTypes = {};

export default Grid;
