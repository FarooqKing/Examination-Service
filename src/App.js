import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Dashboard/home";
import Sidebar from "./pages/Sidebar/sidebar";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import Registeration from "./pages/Registeration/Registeration";
import Login from "./pages/Login/Login";
import Applicants from "./pages/ApplicantsInputForm/Applicants";
import DegreeApplication from "./pages/DegreeAplication/DegreeApplication";
import Migration from "./pages/Migration/Migration";
import Home from "./pages/Dashboard/home";
import Cards from "./pages/CardPage/Cards";

function App() {
  return (
    <>
      <div>
        <div id="wrapper">
          <Sidebar />
          <div
            id="content-wrapper"
            class="d-flex flex-column"
            style={{ overflowX: "visible" }}
          >
            {/* <div id="content"> */}
            <Navbar />
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/Registeration" element={<Registeration />} />
                <Route path="/" element={<Login />} />
                <Route path="/Applicants" element={<Applicants />} />
                <Route path="/Migration" element={<Migration />} />
                <Route path="/CardPage" element={<Cards />} />

                <Route
                  path="/DegreeAplication"
                  element={<DegreeApplication />}
                />
              </Routes>
            </BrowserRouter>
            {/* </div> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
