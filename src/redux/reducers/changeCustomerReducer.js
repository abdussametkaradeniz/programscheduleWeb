import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeCustomerReducer(
  state = initialState.currentCustomer,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_CUSTOMER:
    //  alert("initialState.currentCustomer"+ action.payload.customerId);
 
      return action.payload;
    default:
      return state;
  }
}
