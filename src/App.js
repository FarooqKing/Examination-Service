import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Page from "./pages/404";
import Blank from "./pages/blank";
import Button from "./pages/buttons";
import Cards from "./pages/cards";
import Chart from "./pages/charts";
import Forgotpassword from "./pages/forgotpassword";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Table from "./pages/table";
import Animation from "./pages/utilities-animation";
import Border from "./pages/utilities-border";
import Color from "./pages/utilities-color";
import Other from "./pages/utilities-other";
import Sidebar from "./pages/sidebar";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";

function App() {
  return (
    <>
      <div>
        <div id="wrapper">
          {/* <!-- Content Wrapper --> */}
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              <Navbar />
              {/* <!-- Begin Page Content --> */}
              <div class="container-fluid"></div>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/buttons" element={<Button />} />
                  <Route path="/cards" element={<Cards />} />
                  <Route path="/utilities-color" element={<Color />} />
                  <Route path="/utilities-border" element={<Border />} />
                  <Route path="/utilities-animation" element={<Animation />} />
                  <Route path="/utilities-other" element={<Other />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgotpassword" element={<Forgotpassword />} />
                  <Route path="/404" element={<Page />} />
                  <Route path="/blank" element={<Blank />} />
                  <Route path="/charts" element={<Chart />} />
                  <Route path="/table" element={<Table />} />
                </Routes>
              </BrowserRouter>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
