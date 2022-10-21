import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Home from "./Components/Home";
import Classic from "./Themes/Classic";
import Professional from "./Themes/Professional";
import Creative from "./Themes/Creative";
import Minimalist from "./Themes/Minimalist";
import Modern from "./Themes/Modern";
import Pagenotfount404 from "./Components/Pagenotfount404";
import About from "./Components/About";
import Input from "./Components/Input"
import Selecttheme from "./Components/Selecttheme";
import Header from "./Components/Header";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<><Header/><About /></>} />
          <Route path='/resumebuild' element={<><Header/><Input /></>} />
          <Route path='/selecttheme' element={<><Header/><Selecttheme /></>} />
          <Route path='/theme-professional/download' element={<Professional />} />
          <Route path='/theme-creative/download' element={<Creative />} />
          <Route path='/theme-classic/download' element={<Classic />} />
          <Route path='/theme-minimalist/download' element={<Minimalist />} />
          <Route path='/theme-modern/download' element={<Modern />} />
          <Route path='*' element={<Pagenotfount404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
