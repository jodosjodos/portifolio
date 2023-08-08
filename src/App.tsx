import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

function App() {
  const backgroundStyles={
    backgroundImage:"url(/assets/whiteBg.png)",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    minHeight:"0vh"

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
