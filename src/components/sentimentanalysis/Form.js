import React from "react";
import PropTypes from "prop-types";
import "./Form.css";
import { connect } from "react-redux";
import {getSentiments} from "../../actions/sentiment"

const Form = ({ getSentiments }) => {
  const onsubmit = (e) => {
    e.preventDefault();
    getSentiments("Terrible");
  };
  return (
    <div className="container">
      <form>
        <div className="text-div">
          <h3>Check with your own Data!</h3>
          <textarea className="text-area" type="text" name="text"></textarea>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => onsubmit(e)}
          >
            Analyze the Review{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {};

export default connect(null, { getSentiments })(Form);
