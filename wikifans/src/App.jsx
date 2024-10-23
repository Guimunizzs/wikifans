import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//css
import "./App.css";

//components
import Navbar from "./components/Navbar";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CharactersDetails from "./pages/CharactersDetails/CharactersDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/characters/:id" element={<CharactersDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
