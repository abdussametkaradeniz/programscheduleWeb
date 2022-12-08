import { actionTypes } from './actionTypes';

export const ActionCreators = {

  addProfile: (user) => ({ type: actionTypes.ADD_USER, payload: { user } }),

  updateProfile: (user) => ({ type: actionTypes.UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({ type: actionTypes.FORM_SUBMITION_STATUS, payload: { status }}),

  login: (user) => ({ type: actionTypes.LOGIN, payload: { user } })
}