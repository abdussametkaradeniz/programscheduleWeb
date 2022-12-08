import {combineReducers} from "redux";
import customerReducers from "../reducers/customerReducers";

/*yeni reducer geldiğinde buraya geçeceğiz */
const reducers = combineReducers({
   customerReducers,
});

export default reducers;