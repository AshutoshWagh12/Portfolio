import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_CERT_CARD_ITEMS } from "../Data/items";



const certificationCardsSlice = createSlice({
    name: 'certCardItems',
    initialState:DEFAULT_CERT_CARD_ITEMS,
    reducers:{
        addCertificateCardItems:(state,action) => {
            return state;
        }
    }
});

export const certificationCardActions = certificationCardsSlice.actions;

export default certificationCardsSlice;