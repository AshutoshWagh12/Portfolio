import {configureStore} from "@reduxjs/toolkit";
import projectCardsSlice from "./projectCardsSlice";
import certificationCardsSlice from "./certificationCardsSlice";
import greetingSlice from "./GreetingSlice";
import SocialMediaLinksSlice from "./SocialMediaLinksSlice";
import skillsSlice from "./SkillsSlice";
import contactPageSlice from "./contactPageSlice";
import experienceCardsSlice from "./ExperienceCardsSlice";




const portfolioStore =configureStore({
    reducer:{
        projectCardItems: projectCardsSlice.reducer,
        certCardItems:certificationCardsSlice.reducer,
        experienceCardItems:experienceCardsSlice.reducer,
        greetingItems:greetingSlice.reducer,
        socialMediaLinks:SocialMediaLinksSlice.reducer,
        skillItems:skillsSlice.reducer,
        contactPageItems:contactPageSlice.reducer,
    }
})

export default portfolioStore;