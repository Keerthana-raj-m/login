import React from "react";
import Login from "./components/Login";
import Web from "./components/Web";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/web" element={<Web />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
