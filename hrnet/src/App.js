import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
