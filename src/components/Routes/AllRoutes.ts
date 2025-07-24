import type { ProfileRoute } from "../../interfaces/interfaces";

export const navRoutes: ProfileRoute[] = [
  { index: 0, routeName: "About Me", path: "/about-me" },
  { index: 1, routeName: "My Journey", path: "/journey" },
  { index: 2, routeName: "My Skills", path: "/skills" },
  {
    index: 3,
    routeName: "Previous Organizations",
    path: "/previous-organizations",
  },
  { index: 4, routeName: "Contact me", path: "/contact-me" },
  { index: 5, routeName: "Enquiry", path: "/enquiry" },
];
export const blogRoutes: ProfileRoute[] = [
  { index: 0, routeName: "DevOps & DevSecOps", path: "/blog/devops" },
  { index: 1, routeName: "System Design", path: "/blog/system-design" },
  { index: 2, routeName: "Coding Challenge", path: "/blog/coding-challenge" },
];
