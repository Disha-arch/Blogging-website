import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
