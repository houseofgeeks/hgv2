import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Levels from "./pages/Levels";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";

function App() {
  const { pathname } = useLocation();
  
  console.log(pathname);
  return (
    <div className="App">
      <Navbar pathname={pathname} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources/:id?" element={<Levels />} />
        <Route path="/resources/:id?/tasks?" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
