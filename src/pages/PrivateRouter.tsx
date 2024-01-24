import { Route, Routes } from "react-router-dom";
// import { DailyReport, Home, Login, Projects, Teams, Users } from "./index";
import Home from './Home'
import Layout from './index'
import Account from './Account'
import Users from './Users'
import Teams from './Teams'
import DailyReport from './DailyReport'
import Projects from './Projects'

export default function PrivateRouter() {
  return (
    <>
      <Routes>
        {/* <Route element={<Layout />} path="/"> */}
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/daily-report" element={<DailyReport />} />
          <Route path="/projects" element={<Projects />} />
        {/* </Route> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}
