// In this task you have to build the routes of the website
// the routes include:
// - '/' which render the <Home /> component
// - '/about' which render the <About /> component
// - '/about/history' which render the <History /> component
// - '/about/contact' which render the <Contact /> component
// - '/classlist' which render the <ClassList /> component

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../App.css";
import { Route,Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import History from "./History"
import ClassList from "./ClassList"
import Contact from "./Contact"
import Data from "./Data"

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="nav">
          <h3>Arab American University</h3>
          <Link to="/home">
          <li>go to home </li>
      </Link>
      <Link to="/about">
        <li>go to About</li>
      </Link>         
          <div className="link-wrap">

    </div>
        </nav>
        <Routes >
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/about/history" element={<History/>}/>
                <Route path="/about/contact" element={<Contact/>}/>
                <Route path="/about/classList" element={<ClassList/>}/>
                <Route path="/about/classList/`${stud.id}`" element={<Data/>}/>




              </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
