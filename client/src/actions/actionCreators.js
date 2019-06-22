import streams from '../apis/streams';
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

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const updatedFormValues = {...formValues, userId}
        const response = await streams.post('/streams', updatedFormValues);

        dispatch({type: actionTypes.CREATE_STREAM, payload: response.data });
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');

        dispatch({type: actionTypes.FETCH_STREAMS, payload: response.data});
    }
}

export const fetchStream = (id) => {
    return  async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);

        dispatch({type: actionTypes.FETCH_STREAM, payload: response.data});
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.put(`/streams/${id}`, formValues);

        dispatch({type: actionTypes.EDIT_STREAM, payload: response.data});
    }
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`streams/${id}`);
        dispatch({type: actionTypes.DELETE_STREAM, payload: id});

    }
}