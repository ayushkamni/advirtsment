// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop"; // import ScrollToTop

import WaterPurifier from "./servicesPages/WaterPurifier";
import AirConditioner from "./servicesPages/AirConditioner";
import Fridge from "./servicesPages/Fridge";
import WashingMachine from "./servicesPages/WashingMachine";
import LedTv from "./servicesPages/LedTv";
import AirPurifier from "./servicesPages/AirPurifier";
import Geyser from "./servicesPages/Geyser";
import FootMassager from "./servicesPages/FootMassager";
import Treadmill from "./servicesPages/Treadmill";
import Microwave from "./servicesPages/Microwave";
import KitchenChimney from "./servicesPages/KitchenChimney";
import VacuumCleaner from "./servicesPages/VacuumCleaner";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ensures page scrolls to top on route change */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/services/water-purifier" element={<WaterPurifier />} />
          <Route path="/services/air-conditioner" element={<AirConditioner />} />
          <Route path="/services/fridge" element={<Fridge />} />
          <Route path="/services/washing-machine" element={<WashingMachine />} />
          <Route path="/services/led-tv" element={<LedTv />} />
          <Route path="/services/air-purifier" element={<AirPurifier />} />
          <Route path="/services/geyser" element={<Geyser />} />
          <Route path="/services/foot-massager" element={<FootMassager />} />
          <Route path="/services/treadmill" element={<Treadmill />} />
          <Route path="/services/microwave" element={<Microwave />} />
          <Route path="/services/kitchen-chimney" element={<KitchenChimney />} />
          <Route path="/services/vacuum-cleaner" element={<VacuumCleaner />} />



        </Routes>
      </main>
      <Footer />

      {/* Bottom navigation for mobile + tablet */}
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
