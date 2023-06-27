import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import NearbyJobs from './home/nearby/NearbyJobs';
import PopularJobs from './home/popular/PopularJobs';

// job details screen
import { default as JobTabs } from "./job-details/job-tabs/JobTabs";
import { default as JobAbout } from "./job-details/job-about/JobAbout";
import { default as JobFooter } from "./job-details/job-footer/JobFooter";
import { default as JobSpecifics } from "./job-details/job-footer/JobFooter";
import { default as JobCompany } from "./job-details/job-company/JobCompany";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";

export {
    ScreenHeaderBtn,
    Welcome,
    NearbyJobs,
    PopularJobs,
    JobCompany,
    JobTabs,
    JobAbout,
    JobFooter,
    JobSpecifics,
    NearbyJobCard,
};
