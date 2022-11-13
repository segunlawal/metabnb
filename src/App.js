import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import CreateWallet from "./components/CreateWallet/CreateWallet";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar showModal={showModal} setShowModal={setShowModal} />
        {showModal && (
          <CreateWallet showModal={showModal} setShowModal={setShowModal} />
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
