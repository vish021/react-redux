import * as actionTypes from './actionsTypes';

//only synchronous actions dispatches can touch reducer
export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
};

//redux-thunk creates middleware and dispatces syn action when async operation is done
export const storeResult = (result) => {
    //will get executed by redux-thunk
    return  dispatch => {
        setTimeout(() => {
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