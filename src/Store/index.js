import {configureStore} from "@reduxjs/toolkit";
import experienceCardsSlice from "./experienceCardsSlice";
import greetingSlice from "./GreetingSlice";
import skillsSlice from "./SkillsSlice";
import certificationCardsSlice from "./certificationCardsSlice";
import projectCardsSlice from "./projectCardsSlice";
import SocialMediaLinksSlice from "./SocialMediaLinksSlice";
import contactPageSlice from "./contactPageSlice";




const portfolioStore =configureStore({
    reducer:{
        projectCardItems: projectCardsSlice.reducer,
        certCardItems:certificationCardsSlice.reducer,        experienceCardItems:experienceCardsSlice.reducer,
        greetingItems:greetingSlice.reducer,
        socialMediaLinks:SocialMediaLinksSlice.reducer,
        skillItems:skillsSlice.reducer,
        contactPageItems:contactPageSlice.reducer,
    }
})

export default portfolioStore;