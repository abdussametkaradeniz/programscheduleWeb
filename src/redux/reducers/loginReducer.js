import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function loginReducer(
  state = initialState.currentCustomer,
  action
) {
  switch (action.type) {
    case actionTypes.GET_LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
