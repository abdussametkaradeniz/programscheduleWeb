import * as actionTypes from "./actionTypes"

export const increaseCounter = () =>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})