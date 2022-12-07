import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";

/*yeni reducer geldiğinde buraya geçeceğiz */
const reducers = combineReducers({
    loginReducer,
    authReducer,
});

export default reducers;