import { ConfigProvider, theme } from "antd";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Auxilliary, Cover, Header, SideMenu } from "shared/index";
import Login from "./Login";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const token = false;

  if (token) {
    return (
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: "#6743C1",
          },
        }}
      >
        <Auxilliary>
          <SideMenu />
          <Auxilliary>
            <Header setIsDarkMode={setIsDarkMode} />
            <Cover>
              <PrivateRouter />
            </Cover>
          </Auxilliary>
        </Auxilliary>
      </ConfigProvider>
    );
  } else {
    return (
      // <ConfigProvider
      //   theme={{
      //     algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      //     token: {
      //       colorPrimary: "#6743C1",
      //     },
      //   }}
      // >
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      // </ConfigProvider>
    );
  }
};

export default Router;
