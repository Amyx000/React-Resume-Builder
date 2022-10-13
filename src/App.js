import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Home from "./Home";
import Classic from "./Themes/Classic";
import Professional from "./Themes/Professional";
import Creative from "./Themes/Creative";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/theme-professional/download' element={<Professional/>} />
          <Route path='/theme-creative/download' element={<Creative/>} />
          <Route path='/theme-classic/download' element={<Classic/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
