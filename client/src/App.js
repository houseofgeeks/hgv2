import "./App.css";
import {Route,Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}  />
        </Routes>
    </div>
  );
}

export default App;
