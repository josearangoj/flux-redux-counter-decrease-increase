import { COUNTER_INCREASE, COUNTER_DECREASE } from "../actionTypes/";

export const increase = function (value) {
  return {
    type: COUNTER_INCREASE,
    payload: {
      increment: value,
    }
  };
};

export const decrease = (value) => ({
  type: COUNTER_DECREASE,
  payload: {
    decrement: value,
  }
});
