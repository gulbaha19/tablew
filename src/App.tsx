import React from "react";
import { Routes, Route, HashRouter as Router, Navigate } from "react-router-dom";
import "./App.css";

import { Main } from "./pages/Main";
import { TablePage } from "../src/pages/TablePage";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/table" element={<TablePage />} />

          <Route index element={<Navigate to="table" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
