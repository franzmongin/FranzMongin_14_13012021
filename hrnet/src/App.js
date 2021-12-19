import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/current" element={<CurrentEmployees />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
