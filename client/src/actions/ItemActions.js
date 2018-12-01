import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from "./types";
import axios from "axios";

export const getItems = () =>
    dispatch => {
        dispatch(setItemsLoading());
        axios.get("/api/items").then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        })
    };


export const addItem = name => dispatch => {
    axios.post('/api/items/add', {name}).then(res => {
        dispatch(setItemsLoading());
        dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    });
};

export const deleteItem = id => dispatch => {
    axios.delete('/api/items/delete/' + id).then(res => {
        dispatch(setItemsLoading());
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    });
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}