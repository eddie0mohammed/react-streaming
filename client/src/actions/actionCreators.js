import * as actionTypes from './actionTypes';

export const signIn = (id) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: id
    }
}

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT,
    }
}