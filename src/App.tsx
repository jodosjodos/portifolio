import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { useTheme } from "./hooks/ThemeContext";
import Libblio from "./pages/Libblio";
import Traileress from "./pages/Traileress";
import AiVisuage from "./pages/AiVisuage";
import Promptopia from "./pages/Promptopia";
import Coryde from "./pages/Coryde";

function App() {
  const { darkMode } = useTheme();

  const backgroundStyles = {
    backgroundImage: ` ${
      darkMode ? "url(/assets/blackBg.png)" : "url(/assets/whiteBg.png)"
    } `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div style={backgroundStyles} className=" min-h-screen md:px-5">
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Libblio />} path="/libblio"></Route>
            <Route element={<Traileress />} path="/traileress"></Route>
            <Route element={<AiVisuage />} path="/aiVisuage"></Route>
            <Route element={<Promptopia />} path="/promptopia"></Route>
            <Route element={<Coryde />} path="/coryde"></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
