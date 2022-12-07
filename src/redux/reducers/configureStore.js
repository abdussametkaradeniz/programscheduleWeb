import { legacy_createStore } from "redux";
import reducers from "./index";

export default function configuresStore(){
    return legacy_createStore(reducers);
}