import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import "./Form.css";

const ResultCard = (props) => {
  return (
    <div className="card-div">
      <Card className="text-div card-props" alignItems="center">
        Score
      </Card>
    </div>
  );
};

ResultCard.propTypes = {};

export default ResultCard;
