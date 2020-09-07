import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";
import "./Box.css";

const Box = (props) => {
  return (
    <>
      <div className="grid">
        <div className="grid-row">
          <Cell x={props.x} y={props.y} type={props.type} />
          <Cell x={props.x} y={1 + props.y} type={props.type} />
          <Cell x={props.x} y={2 + props.y} type={props.type} />
        </div>
        <div className="grid-row">
          <Cell x={1 + props.x} y={props.y} type={props.type} />
          <Cell
            x={1 + props.x}
            y={1 + props.y}
            type={props.type}
          />
          <Cell
            x={1 + props.x}
            y={2 + props.y}
            type={props.type}
          />
        </div>
        <div className="grid-row">
          <Cell x={2 + props.x} y={props.y} type={props.type} />
          <Cell
            x={2 + props.x}
            y={1 + props.y}
            type={props.type}
          />
          <Cell
            x={2 + props.x}
            y={2 + props.y}
            type={props.type}
          />
        </div>
      </div>
    </>
  );
};

Box.propTypes = {};

export default Box;
