//NOTE: all the reducers are at the end merged into a global reducer. Hoever, you can not access other reducer's state here.
// state here refers to local not GLOBAL :(   They hould be passed via Component as they're connected to global store 
import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((element => element.id !== action.id));
    return updateObject(state, {results: updatedArray});
};

//change data
//don't use push, it mutates an object. Also new Date() isn't an ideal way it'll result in errors
const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({value: action.result, id: new Date()})});
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    }
    return state;
};

export default resultReducer;