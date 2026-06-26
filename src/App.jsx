import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.module.css";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ProductGraphic from "./components/ProductGraphic/ProductGraphic.jsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
import WhoItsFor from "./components/WhoItsFor/WhoItsFor.jsx";
import BookDemo from "./components/BookDemo/BookDemo.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <ProductGraphic />
      <HowItWorks />
      <WhoItsFor />
      <BookDemo />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
