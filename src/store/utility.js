// use as an alternative approach - Immutable.JS
export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    };
};