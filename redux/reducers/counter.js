import { COUNTER_INCREASE, COUNTER_DECREASE } from "../actionTypes/";

const initialState = {
   value: 0 // default value in case is not specified
};

export default function (state = initialState, action) {
   switch (action.type) {
      case COUNTER_INCREASE:
         const newState = {value: state.value + action.payload.increment};
         return newState;
      case COUNTER_DECREASE:
         return {
            ...state,
            value: state.value - action.payload.decrement
         }
      default:
         return state;
   }
};
