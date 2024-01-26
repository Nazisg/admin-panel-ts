import { Route, Routes } from "react-router-dom";
// import { DailyReport, Home, Login, Projects, Teams, Users } from "./index";
import Employees from './Employees'
import Teams from './Teams'
import DailyReport from './DailyReport'
import Projects from './Projects'
import Login from './Login'

export default function PrivateRouter() {
  return (
    <>
      <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/daily-report" element={<DailyReport />} />
          <Route path="/projects" element={<Projects />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}
