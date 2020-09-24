import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          {/* more pages to be added here later */}
          <Route component={HomePage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
