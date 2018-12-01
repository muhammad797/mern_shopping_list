import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from "./types";

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
};

export const addItem = (data) => {
    return {
        type: ADD_ITEM,
        payload: data
    }
};

export const deleteItem = (data) => {
    return {
        type: DELETE_ITEM,
        payload: data
    }
};