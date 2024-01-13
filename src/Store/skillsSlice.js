import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_SKILL_ITEMS } from "../Data/items";


const skillsSlice = createSlice({
    name: 'skillItems',
    initialState:DEFAULT_SKILL_ITEMS,
    reducers:{
        addSkillItems:(state,action) => {
            return state;
        }
    }
});

export const skillActions = skillsSlice.actions;

export default skillsSlice;