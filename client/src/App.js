import "./App.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const { pathname } = useLocation();


  return (
    <div className="App">
      <Navbar pathname={pathname} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
