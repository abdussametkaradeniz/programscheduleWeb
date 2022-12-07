import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
import changeCustomerReducer from "./changeCustomerReducer";
/*yeni reducer geldiğinde buraya geçeceğiz */
const reducers = combineReducers({
    loginReducer,
    authReducer,
    changeCustomerReducer,
});

export default reducers;