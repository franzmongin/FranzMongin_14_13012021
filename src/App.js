import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/current" element={<CurrentEmployees />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
