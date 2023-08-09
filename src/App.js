import React,{ useState, useEffect } from "react";
import "./App.css";
import NaviApp from "./components/pages/NaviApp";

function App() {  
  return (
     <div className="App">
      <header
        className="App-header"        
      >
        <h1>Board Game Calculator PWA</h1>
      </header>
      <NaviApp />
    </div>
  );
}

export default App;
