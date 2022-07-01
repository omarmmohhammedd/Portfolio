import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import ProjectDisplay from './components/Single_project/ProjectDisplay';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/project/:id' element={ <ProjectDisplay/>} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
