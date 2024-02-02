import { ConfigProvider, theme } from "antd";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Auxilliary, Cover, Header, SideMenu } from "shared/index";
import Login from "./Login";
import PrivateRouter from "./PrivateRouter";
import RenderIf from "src/shared/components/RenderIf";

const Router = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const token = true;

  return (
    <RenderIf
      conditions={token}
      renderelse={
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      }
    >
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
    </RenderIf>
  );
};

export default Router;
