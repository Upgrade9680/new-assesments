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
      <div className="bg-[#ff2056]">
        <div className="flex items-center px-20 justify-between  py-1 text-white text-xs max-w-7xl mx-auto">
          <div>
            <div>Connecting Cyber Networks, Empowering Your Future</div>
            <div className="flex items-center gap-2 mt-1">
              <img src={Call} alt="call" className="w-6 h-6" />
              <span className="text-xs font-bold">+91 77770 97791</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={Call} alt="call" className="w-6 h-6" />
            <span className="text-xs font-bold">+91 77770 97791</span>
            <img src={whatsapp} alt="whatsapp" className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="bg-white not-[]: sticky top-0 z-50 border-b shadow-md">
        <div className="flex px-20 justify-between items-center p-2 max-w-7xl mx-auto">
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="pl-2 w-28 h-10"
          />

          <a
            href="#enquiry-form"
            className="hidden lg:inline-block rounded-md bg-[#ff2056] px-6 py-2 text-xs font-semibold text-white shadow"
          >
            ENQUIRE NOW
          </a>

          <button className="lg:hidden p-2" onClick={toggleMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#000]" />
            ) : (
              <Menu className="h-6 w-6 text-[#000]" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-inner px-2 pb-4 pt-4">
            <a
              href="#enquiry-form"
              className="block w-30 text-center rounded-md bg-[#ff2056] px-2 py-1 text-xs font-semibold text-white shadow"
              onClick={() => setMobileMenuOpen(false)}
            >
              ENQUIRE NOW
            </a>
          </div>
        )}
      </div>

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
