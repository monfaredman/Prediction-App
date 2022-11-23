import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "./header";
import Footer from "./footer";
import { theme } from "../plugins/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <CssBaseline enableColorScheme />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
