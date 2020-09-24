import React from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import ResultCard from "./ResultCard";

const SentimentMain = (props) => {
  return (
    <>
      <h3 style={{ textAlign: "center", color: "Darkgray" }}>
        Sentiment Analysis
      </h3>
      <Form></Form>
      <ResultCard></ResultCard>
    </>
  );
};

SentimentMain.propTypes = {};

export default SentimentMain;
