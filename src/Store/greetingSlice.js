import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_GREETING_ITEMS } from "../Data/items";


const greetingSlice = createSlice({
    name: 'greetingItems',
    initialState:DEFAULT_GREETING_ITEMS,
    reducers:{
        addGreetingItems:(state,action) => {
            return state;
        }
    }
});

export const greetingActions = greetingSlice.actions;

export default greetingSlice;