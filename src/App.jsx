import React from "react";
import "../src/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import  Services  from "./components/routes/listPage/listpage";
import Team from "./pages/Team";
import Contact from "./pages/Contact"; 
// import ListPage from "./components/routes/listPage/listPage"; 
// import Layout from "./components/routes/layout/layout";
import SinglePage from "./components/routes/SinglePage/SinglePage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/list" element={<ListPage />} /> */}
          <Route path="/:id" element={<SinglePage />} />

          {/* Add Contact Route */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
