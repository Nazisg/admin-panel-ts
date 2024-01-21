import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routes/index";
import "./styles/reset.scss";
function App() {
  return (
    <>
      <Router>
        <Routers />
      </Router>
    </>
  );
}

export default App;
