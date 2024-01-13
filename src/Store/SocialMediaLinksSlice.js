import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_SOCIALMEDIA_LINKS } from "../Data/items";



const SocialMediaLinksSlice = createSlice({
    name: 'socialMediaLinks',
    initialState:DEFAULT_SOCIALMEDIA_LINKS,
    reducers:{
        addSocialMediaLinks:(state,action) => {
            return state;
        }
    }
});

export const SocialMediaActions = SocialMediaLinksSlice.actions;

export default SocialMediaLinksSlice;


