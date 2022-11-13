import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "./header";
import Footer from "./footer";
import "../style/style.scss";

const App = () => {
  return (
    <div className="main">
      <CssBaseline />

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
