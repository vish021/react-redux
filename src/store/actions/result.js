import * as actionTypes from './actionsTypes';

//only synchronous actions dispatches can touch reducer
export const saveResult = (result) => {
    //const updatedResult  = result * 2 ;
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
};

//redux-thunk creates middleware and dispatces syn action when async operation is done
//Any logic tranforming data for the storing in state SHOUld BE KEPT IN REDUCERS
export const storeResult = (result) => {
    //will get executed by redux-thunk,only place to execute asyn coe
    return  (dispatch, getState) => {
        setTimeout(() => {
            //const oldCounter = getState().ctr.counter;
            //console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    };
};