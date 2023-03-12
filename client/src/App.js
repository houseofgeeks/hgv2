import "./App.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resources2 from "./pages/Resources2";
import Resources3 from "./pages/Resources3";
function App() {
  const { pathname } = useLocation();


  return (
    <div className="App">
      <Navbar pathname={pathname} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources2" element={<Resources2 />} />
        <Route path="/resources3" element={<Resources3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
