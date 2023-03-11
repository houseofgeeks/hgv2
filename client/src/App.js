import "./App.css";
import {Route,Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Resources from "./pages/Resources"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}  />
          <Route path='/resources' element={<Resources />}  />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
