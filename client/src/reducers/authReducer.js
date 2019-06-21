import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    isSignedIn: false,
    userId: '',

}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            }
        case actionTypes.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userId: '',
            }

        default:
            return state
    }
}
export default authReducer