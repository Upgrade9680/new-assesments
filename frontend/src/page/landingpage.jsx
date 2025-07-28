import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Background from './background';
import Call from '../assets/whatsapp.png';
import whatsapp from '../assets/whatsapp1.png';
import CompanyLogo from '../assets/logo.png';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Section11 from './Section11';
import Section12 from './Section12';

const Landingpage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full">
      {/* 🔴 Top Info Bar */}
      <div className="bg-[#ff2056] w-full">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-white text-xs gap-2">
          <div className="w-full sm:w-auto">
            <p className="font-medium text-sm">
              Connecting Cyber Networks, Empowering Your Future
            </p>
            <div className="flex items-center gap-2 mt-1">
              <img src={Call} alt="call" className="w-4 h-4" />
              <span className="font-semibold text-sm">+91 77770 97791</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:self-auto self-end">
            <img src={Call} alt="call" className="w-5 h-5" />
            <span className="font-semibold text-sm">+91 77770 97791</span>
            <img src={whatsapp} alt="whatsapp" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 🟡 Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="w-28 h-10 object-contain"
          />

          {/* Desktop CTA */}
          <a
            href="#enquiry-form"
            className="hidden lg:inline-block rounded-md bg-[#ff2056] px-6 py-2 text-xs font-semibold text-white shadow"
          >
            ENQUIRE NOW
          </a>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={toggleMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#ff2056]" />
            ) : (
              <Menu className="h-6 w-6 text-[#ff2056]" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-inner px-4 pb-4">
            <a
              href="#enquiry-form"
              className="block w-full text-center rounded-md bg-[#ff2056] px-6 py-2 text-sm font-semibold text-white shadow"
              onClick={() => setMobileMenuOpen(false)}
            >
              ENQUIRE NOW
            </a>
          </div>
        )}
      </div>

      {/* 🔵 Page Sections */}
      <Background />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
    </div>
  );
};

export default Landingpage;
