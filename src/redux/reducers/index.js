import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
import changeCustomerReducer from "./changeCustomerReducer";
/*yeni reducer geldiğinde buraya geçeceğiz */
const reducers = combineReducers({
    counterReducer,
    loginReducer,
    authReducer,
    changeCustomerReducer,
});

export default reducers;