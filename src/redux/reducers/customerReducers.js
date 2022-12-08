import { actionTypes } from '../actions/actionTypes';

const initialState = {
  profile: {
    CustomerName: '',
    CustomerSurname: '',
    CustomerEmail: '',
    state: '',
  },
  formSubmitted: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
    console.log('login', action.payload.user)
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    case actionTypes.ADD_USER:
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false // after update user formsubmition reset
      }  
    case actionTypes.FORM_SUBMITION_STATUS:
      return {
        ...state,
        formSubmitted: action.payload.status
      }
    default:
      return state;
  }
}

export default reducer;