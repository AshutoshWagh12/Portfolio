import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_CONTACTPAGE_ITEMS } from "../Data/items";



const contactPageSlice = createSlice({
    name: 'contactPageItems',
    initialState:DEFAULT_CONTACTPAGE_ITEMS,
    reducers:{
        addContactPageItems:(state,action) => {
            return state;
        }
    }
});

export const contactPageActions = contactPageSlice.actions;

export default contactPageSlice;