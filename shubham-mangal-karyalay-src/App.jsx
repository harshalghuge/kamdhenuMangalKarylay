import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import MobileBottomBar from "./components/layouts/MobileBottomBar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import Halls from "./pages/Halls";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function Website() {
  const [language, setLanguage] = useState("en");
  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/halls" element={<Halls language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="*" element={<Home language={language} />} />
      </Routes>
      <Footer language={language} />
      <MobileBottomBar language={language} />
    </>
  );
}

export default function App() {
  return <BrowserRouter><Website /></BrowserRouter>;
}
