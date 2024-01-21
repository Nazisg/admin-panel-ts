import { Route, Routes } from "react-router-dom";
import data from "./data";
export default function Routers() {
  return (
    <>
      <Routes>
        {data.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}
