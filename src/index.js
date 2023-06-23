import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BookContextProvider } from "./context/BookContext";
import { NoticeContextProvider } from "./context/NoticeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BookContextProvider>
      <NoticeContextProvider>
        <App />
      </NoticeContextProvider>
    </BookContextProvider>
  </BrowserRouter>
);
