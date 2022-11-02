import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import Topbar from "./components/Topbar";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calendar from "./pages/Calendar/Calendar";
import Journal from "./pages/Journal/Journal";
import Trades from "./pages/Trades/Trades";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Router>
        <div className="app">
            <SideNav />
            <main className="content">
                <Topbar />
              <Box>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/journal" element={<Journal />} />
                  <Route path="/trades" element={<Trades />} />
                </Routes>
              </Box>
            </main>
        </div>
          </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
