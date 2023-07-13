import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MeetupProvider } from "./Context/MeetupProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MeetupProvider>
      <Router>
        <App />
      </Router>
    </MeetupProvider>
  </React.StrictMode>
);
