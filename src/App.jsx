import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Starred from "./pages/Starred";

function App() {
  const theme = {
    mainColors: {
      blue: "#2400ff",
      gray: "#c6c6c6",
      dark: "#353535",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/shows/:id" element={<Shows />} />

          <Route path="*" element={<div>ERROR..........</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
