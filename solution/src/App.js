import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="container mt-5">
      <h2>React Interview Assessment</h2>
      <Profile />
    </div>
  );
}
export default App;