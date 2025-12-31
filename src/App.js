import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHeader from "./components/NavbarHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import MusicPlayer from "./components/MusicPlayer";
import BirthdayGirlWish from "./components/BirthdayGirlWish";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays on every page */}
      <NavbarHeader />

      {/* Background Music stays on every page */}
      <MusicPlayer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/birthday" element={<BirthdayGirlWish />} />

      </Routes>
    </BrowserRouter>
  );
}
