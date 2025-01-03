import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Bloglarimiz from "./pages/Bloglarimiz";
import Categories from "./pages/Categories";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/bloglarimiz" element={<Bloglarimiz />} />
      </Routes>
    </Router>
  );
};

export default App;
