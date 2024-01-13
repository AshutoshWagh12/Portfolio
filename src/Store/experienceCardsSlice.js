import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_EXPERIENCE_CARD_ITEMS } from "../Data/items";



const experienceCardsSlice = createSlice({
    name: 'experienceCardItems',
    initialState:DEFAULT_EXPERIENCE_CARD_ITEMS,
    reducers:{
        addExperienceCardsItems:(state,action) => {
            return state;
        }
    }
});

export const experienceCardActions = experienceCardsSlice.actions;

export default experienceCardsSlice;