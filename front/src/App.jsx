import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/blog/Blog';
// import BlogDetail from './pages/blog/BlogDetail';
import Faqs from './pages/faqs/Faqs';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Testimonials from './pages/Testimonials';
import Error from './pages/Error';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Pricing from './pages/Pricing';
import Will from './components/Essentails/Will';
import Gst from './components/Essentails/Gst';
import Rti from './components/Essentails/Rti';
import EmploymentContracts from './components/Essentails/EmploymentContracts';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
const App = () => {
  const location = useLocation();

  // Define routes where Navbar and Footer should be hidden
  const hideNavbarFooterRoutes = ['/login', '/signup'];
  const isErrorPage = location.pathname === '*' || !['/', '/about', '/blog', '/blog/:id', '/faqs', '/contact', '/signup', '/login', '/testimonials', '/pricing','/will','/gst','/rti','/contracts'].includes(location.pathname);

  const shouldHideNavbarFooter = hideNavbarFooterRoutes.includes(location.pathname) || isErrorPage;

  return (
    <div>
      {!shouldHideNavbarFooter && <Navbar />}
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog/:id" element={<BlogDetail />} /> */}
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/will" element={<Will />} />
        <Route path="/gst" element={<Gst />} />
        <Route path="/rti" element={<Rti />} />
        <Route path="/contracts" element={<EmploymentContracts />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/terms-conditions" element={<TermsAndConditions/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!shouldHideNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
