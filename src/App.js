import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css"
import Header from "./Header";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
    </BrowserRouter>  
    </>
  );
}

export default App;
