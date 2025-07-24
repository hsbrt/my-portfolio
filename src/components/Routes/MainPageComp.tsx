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
        path="/"
        element={
          <InfoLayout
            menuComp={<HomeMenu />}
            mainComp={<Home />}
            subComp={null}
          />
        }
      />
      <Route
        path="/om"
        element={
          <InfoLayout
            menuComp={<HomeMenu />}
            mainComp={<Home />}
            subComp={<HomeSubMenu />}
          />
        }
      />
      <Route
        path="/about-me"
        element={
          <InfoLayout
            menuComp={<AboutMeMenu />}
            mainComp={<AboutMe />}
            subComp={<AboutMeSubMenu />}
          />
        }
      />
      <Route
        path="/journey"
        element={
          <InfoLayout
            menuComp={<JourneyMenu />}
            mainComp={<Journey />}
            subComp={<JourneySubMenu />}
          />
        }
      />
      <Route
        path="/skills"
        element={
          <InfoLayout
            menuComp={<SkillsMenu />}
            mainComp={<Skills />}
            subComp={<SkillsSubMenu />}
          />
        }
      />
      <Route
        path="/previous-organizations"
        element={
          <InfoLayout
            menuComp={<PrevOrgsMenu />}
            mainComp={<PrevOrgs />}
            subComp={<PrevOrgsSubMenu />}
          />
        }
      />
      <Route
        path="/contact-me"
        element={
          <InfoLayout
            menuComp={<ContactMenu />}
            mainComp={<Contact />}
            subComp={<ContactSubMenu />}
          />
        }
      />
      <Route
        path="/enquiry"
        element={
          <InfoLayout
            menuComp={<EnquiryMenu />}
            mainComp={<Enquiry />}
            subComp={<EnquirySubMenu />}
          />
        }
      />
      <Route
        path="/blog/*"
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
