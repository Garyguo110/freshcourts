import React from "react";
import { SessionProvider } from "./FreshContext";
import AllCourts from "./Courts";
import "./App.css";

function App() {
  return (
    <SessionProvider>
      <div className="App">
        <AllCourts></AllCourts>
      </div>
    </SessionProvider>
  );
}

export default App;
