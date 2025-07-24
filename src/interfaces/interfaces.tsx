import type { ReactNode } from "react";

export interface ProfileRoute {
  index: number;
  routeName: string;
  path: string;
  disabled?: boolean;
}

export interface InfoLayoutProps {
  menuComp: ReactNode;
  mainComp: ReactNode;
  subComp: ReactNode;
}
