import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CustomerReducer from "./customerReducers" ;

const rootReducer = combineReducers({
  user: CustomerReducer
});

const configureStore = () => {
  return legacy_createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );
};

export default configureStore;