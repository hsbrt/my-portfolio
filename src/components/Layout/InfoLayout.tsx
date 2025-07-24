import MenuComp from "./Menu";
import MainComp from "./MainComponent";
import SubmenuComp from "./SubMenu";
import type { InfoLayoutProps } from "../../interfaces/interfaces";
export default function InfoLayout(InfoLayoutProps: InfoLayoutProps) {
  const { menuComp, mainComp, subComp } = InfoLayoutProps;
  return (
    <>
      <div className="d-flex align-items-center overflow-y d-grid gap-0 column-gap-0">
        <div className="col-3 border p-4 vh-100 overflow-y-auto">
          <MenuComp menuComp={menuComp} />
        </div>
        <div className="col-6 border p-md-4 p-sm-2 p-0 vh-100 overflow-y-auto">
          <MainComp mainComp={mainComp} />
        </div>
        <div className="col-3 border p-4 vh-100 overflow-y-auto">
          <SubmenuComp subComp={subComp} />
        </div>
      </div>
    </>
  );
}
