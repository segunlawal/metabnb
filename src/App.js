import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
