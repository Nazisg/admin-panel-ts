import { BrowserRouter } from "react-router-dom";
import Router from "src/pages/index";
import "./styles/fonts.scss";
import "./styles/reset.scss";
import "./styles/global.scss"
function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
