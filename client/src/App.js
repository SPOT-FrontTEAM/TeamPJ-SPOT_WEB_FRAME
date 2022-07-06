import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

// PageRouter
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import StudyServicePage from "./components/views/StudyServicePage/StudyServicePage";
import Spot from "./components/views/SpotPage/Spot";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/study" element={<StudyServicePage />} />
          <Route path='/spot' element={<Spot />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
