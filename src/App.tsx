import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import { Services } from './pages/Services';
import Contact from './pages/Contact';
import { Application } from './pages/Application';
import { ThankYou } from './pages/ThankYou';
import { ScrollToTopOnMount } from './components/ScrollToTopOnMount';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F8F4ED]">
        <ScrollToTopOnMount />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Application />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}