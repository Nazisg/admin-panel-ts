import { Navigate, Route, Routes } from "react-router-dom";
import DailyReport from "./DailyReport";
import Employees from "./Employees";
import Projects from "./Projects";
import Teams from "./Teams";

export default function PrivateRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/reports" element={<DailyReport />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
