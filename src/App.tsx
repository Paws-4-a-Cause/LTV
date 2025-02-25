import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/index"; // Ensure Home (index.tsx) is in src/pages
import About from "./pages/About"; // Ensure About.tsx is in src/pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
