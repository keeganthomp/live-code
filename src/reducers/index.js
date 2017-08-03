import { combineReducers } from "redux";
import {SHOW_MESSAGE} from '../actions'

const initialState = "yay";
console.log(initialState);


function details(state = "", action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      console.log("Reducer Just Triggered button click");
      return "button clicked"
    default:
      return state;
  }
}
// can never return a mutated state in reducers..must be fresh state or original
//because we dont have a selected book right off the bat, we get an error

const rootReducer = combineReducers({
  yay: details
});

export default rootReducer;