import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Home,Account, DailyReport, Projects, Teams, Users } from "src/pages/index";
import Layout from "src/shared/cover/layout";
import "./styles/fonts.scss";
import "./styles/reset.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/daily-report" element={<DailyReport />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
