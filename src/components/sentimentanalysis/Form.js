import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = (props) => {
  return (
    <div className="container">
      <form>
        <div className="text-div">
          <h3>Check with your own Data!</h3>
          <textarea className="text-area" type="text" name="text"></textarea>
          <br />
          <button className="btn btn-primary">Analyze the Review </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {};

export default Form;
