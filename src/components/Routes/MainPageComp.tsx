import { Routes, Route } from "react-router-dom";
import { Home, HomeMenu, HomeSubMenu } from "../Nav/Home";
import { AboutMe, AboutMeMenu, AboutMeSubMenu } from "../Nav/AboutMe";
import { Journey, JourneyMenu, JourneySubMenu } from "../Nav/MyJourney";
import { Skills, SkillsMenu, SkillsSubMenu } from "../Nav/Skills";
import { PrevOrgs, PrevOrgsMenu, PrevOrgsSubMenu } from "../Nav/PrevOrgs";
import { Contact, ContactMenu, ContactSubMenu } from "../Nav/Contact";
import { Enquiry, EnquiryMenu, EnquirySubMenu } from "../Nav/Enquiry";
import NotFound from "./notFoundPage";
import InfoLayout from "../Layout/InfoLayout";

export default function MainPageComp() {
  return (
    <Routes>
      <Route
        path="/my-portfolio"
        element={
          <InfoLayout
            menuComp={<HomeMenu />}
            mainComp={<Home />}
            subComp={null}
          />
        }
      />
      <Route
        path="/my-portfolio"
        element={
          <InfoLayout
            menuComp={<HomeMenu />}
            mainComp={<Home />}
            subComp={null}
          />
        }
      />
      <Route
        path="/my-portfolio/om"
        element={
          <InfoLayout
            menuComp={<HomeMenu />}
            mainComp={<Home />}
            subComp={<HomeSubMenu />}
          />
        }
      />
      <Route
        path="/my-portfolio/about-me"
        element={
          <InfoLayout
            menuComp={<AboutMeMenu />}
            mainComp={<AboutMe />}
            subComp={<AboutMeSubMenu />}
          />
        }
      />
      <Route
        path="/my-portfolio/journey"
        element={
          <InfoLayout
            menuComp={<JourneyMenu />}
            mainComp={<Journey />}
            subComp={<JourneySubMenu />}
          />
        }
      />
      <Route
        path="/my-portfolio/skills"
        element={
          <InfoLayout
            menuComp={<SkillsMenu />}
            mainComp={<Skills />}
            subComp={<SkillsSubMenu />}
          />
        }
      />
      <Route
        path="/my-portfolio/previous-organizations"
        element={
          <InfoLayout
            menuComp={<PrevOrgsMenu />}
            mainComp={<PrevOrgs />}
            subComp={<PrevOrgsSubMenu />}
          />
        }
      />
      <Route
        path="/my-portfolio/contact-me"
        element={
          <InfoLayout
            menuComp={<ContactMenu />}
            mainComp={<Contact />}
            subComp={<ContactSubMenu />}
          />
        }
      />
      <Route
        path="/my-portfolio/enquiry"
        element={
          <InfoLayout
            menuComp={<EnquiryMenu />}
            mainComp={<Enquiry />}
            subComp={<EnquirySubMenu />}
          />
        }
      />
      <Route
        path="/my-portfolio/blog/*"
        element={
          <InfoLayout
            menuComp={<EnquiryMenu />}
            mainComp={<NotFound />}
            subComp={<EnquirySubMenu />}
          />
        }
      />
      {/* <Route
        path="/blog/devops"
        element={
          <InfoLayout
            menuComp={<DevOpsMenu />}
            mainComp={<DevOps />}
            subComp={<DevOpsSubMenu />}
          />
        }
      />
      <Route
        path="/blog/system-design"
        element={
          <InfoLayout
            menuComp={<SystemDesignMenu />}
            mainComp={<SystemDesign />}
            subComp={<SystemDesignSubMenu />}
          />
        }
      />
      <Route
        path="/blog/system-design"
        element={
          <InfoLayout
            menuComp={null}
            mainComp={<SystemDesign />}
            subComp={null}
          />
        }
      />
      <Route
        path="/blog/coding-challenge"
        element={
          <InfoLayout
            menuComp={<CodingChallengesMenu />}
            mainComp={<CodingChallenges />}
            subComp={<CodingChallengesSubMenu />}
          />
        }
      /> */}
    </Routes>
  );
}
