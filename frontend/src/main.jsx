import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <GoogleOAuthProvider  clientId="193801054899-i8gl358gagq2ben98rveggc1amqlt8n3.apps.googleusercontent.com" >
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
  </React.StrictMode>
);
