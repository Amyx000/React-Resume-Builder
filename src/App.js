import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Home from "./Home";
import Theme1 from "./Theme1";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/theme1/download' element={<Theme1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
