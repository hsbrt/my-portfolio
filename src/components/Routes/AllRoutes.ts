import type { ProfileRoute } from "../../interfaces/interfaces";

export const navRoutes: ProfileRoute[] = [
  { index: 0, routeName: "About Me", path: "/my-portfolio/about-me" },
  { index: 1, routeName: "My Journey", path: "/my-portfolio/journey" },
  { index: 2, routeName: "My Skills", path: "/my-portfolio/skills" },
  {
    index: 3,
    routeName: "Previous Organizations",
    path: "/my-portfolio/previous-organizations",
  },
  { index: 4, routeName: "Contact me", path: "/my-portfolio/contact-me" },
  { index: 5, routeName: "Enquiry", path: "/my-portfolio/enquiry" },
];
export const blogRoutes: ProfileRoute[] = [
  {
    index: 0,
    routeName: "DevOps & DevSecOps",
    path: "/my-portfolio/blog/devops",
  },
  {
    index: 1,
    routeName: "System Design",
    path: "/my-portfolio/blog/system-design",
  },
  {
    index: 2,
    routeName: "Coding Challenge",
    path: "/my-portfolio/blog/coding-challenge",
  },
];
