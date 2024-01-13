import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_PROJECT_CARD_ITEMS } from "../Data/items";



const projectCardsSlice = createSlice({
    name: 'projectCardItems',
    initialState:DEFAULT_PROJECT_CARD_ITEMS,
    reducers:{
        addProjectCardsItems:(state,action) => {
            return state;
        }
    }
});

export const projectCardActions = projectCardsSlice.actions;

export default projectCardsSlice;