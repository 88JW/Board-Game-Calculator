import React,{ useState, useEffect } from "react";
import "./App.css";
import NaviApp from "./components/pages/NaviApp";

function App() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
     <div className="App">
      <header
        className="App-header"
        style={{
          opacity: showHeader ? 1 : 0,
          transition: "opacity 2s ease-in-out",
        }}
      >
        <h1>Board Game Calculator PWA</h1>
      </header>
      <NaviApp />
    </div>
  );
}

export default App;
