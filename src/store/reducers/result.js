//NOTE: all the reducers are at the end merged into a global reducer. Hoever, you can not access other reducer's state here.
// state here refers to local not GLOBAL :(   They hould be passed via Component as they're connected to global store 
import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
               results: state.results.concat({value: action.result, id: new Date()})//don't use push, it mutates an object. Also new Date() isn't an ideal way it'll result in errors
            };
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter((element => element.id !== action.id));
            return {
                ...state,
                results: updatedArray
            };
    }
    return state;
};

export default resultReducer;