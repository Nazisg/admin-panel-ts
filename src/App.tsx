import { BrowserRouter } from "react-router-dom";
import "./styles/reset.scss";
import Routes from "./pages";
import "./styles/fonts.scss";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
