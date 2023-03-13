import "./App.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Levels from "./pages/Levels";
import Tasks from "./pages/Tasks";
function App() {
  const { pathname } = useLocation();
  
  console.log(pathname);
  return (
    <div className="App">
      <Navbar pathname={pathname} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id?" element={<Levels />} />
        <Route path="/resources/:id?/tasks?" element={<Tasks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
