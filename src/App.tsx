import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { useTheme } from "./hooks/ThemeContext";

function App() {
  const { darkMode} = useTheme();

  const backgroundStyles={
    backgroundImage:` ${darkMode ? "url(/assets/blackBg.png)" : "url(/assets/whiteBg.png)"} `,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",

  }
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div style={backgroundStyles} className=" min-h-screen">

        <Routes>
            <Route element={<Home />} path="/"></Route>
       
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
