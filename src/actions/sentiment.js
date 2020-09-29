import { GET_SENTIMENTS } from "./types";
import axios from "axios";

export const getSentiments = (text) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post("/sentiment", { text: "check" }, config);
};
