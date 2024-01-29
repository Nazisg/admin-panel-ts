// export { default as Account } from "./Account/index";
export { default as DailyReport } from "./DailyReport/index";
// export { default as Home } from "./Home/index";
export { default as Users } from "./Employees/index";
export { default as Login } from "./Login/index";
export { default as Projects } from "./Projects/index";
export { default as Teams } from "./Teams/index";

import Header from "shared/layout/Header";
import SideMenu from "shared/layout/SideMenu";
import Auxiliary from "shared/modules/Auxilliary";
import Cover from "shared/modules/Cover";
import PrivateRouter from "./PrivateRouter";
const Router = () => {
  return (
    <Auxiliary>
      <SideMenu />
      <Auxiliary>
        <Header />
        <Cover>
          <PrivateRouter />
        </Cover>
      </Auxiliary>
    </Auxiliary>
  );
};

export default Router;
