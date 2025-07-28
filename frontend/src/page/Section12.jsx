import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Mail,
  Phone,
  PhoneCall,
  Clock,
} from 'lucide-react';

const Section12 = () => {
  return (
    <footer className="bg-white pt-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {/* Left: Logo + About + Social */}
          <div>
            <div className="mb-6">
              <img
                src="https://www.connectingcybernetworks.com/images/logo%20try-01.png"
                alt="Connecting Cyber Networks Logo"
                className="h-auto w-35 object-contain"
              />
            </div>
            <p className="mb-8 max-w-xs text-sm leading-relaxed text-gray-700">
              Transforming careers through cutting-edge cybersecurity education
              and guaranteed job placement.
            </p>
            <div className="flex gap-4 text-gray-600">
              <a
                href="https://www.facebook.com/connectingcybernetworks"
                aria-label="Facebook"
                className="rounded-full p-2 transition hover:bg-indigo-50 hover:text-[#ff2056]"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/ccn_mumbai"
                aria-label="Twitter"
                className="rounded-full p-2 transition hover:bg-indigo-50 hover:text-[#ff2056]"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/connecting-cyber-networks/"
                aria-label="LinkedIn"
                className="rounded-full p-2 transition hover:bg-indigo-50 hover:text-[#ff2056]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/connectingcybernetworks_ccn/?hl=en"
                aria-label="Instagram"
                className="rounded-full p-2 transition hover:bg-indigo-50 hover:text-[#ff2056]"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Middle: Contact */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-gray-900">
              Let's Talk!
            </h4>
            <ul className="space-y-6 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-15 w-15 text-pink-600" />
                <span>
                  Vaastu Darshan, B-602, Gundawali Azad Rd, Near BMC Ward
                  Office, Azad Nagar, Andheri East, Mumbai, Maharashtra 400069
                </span>
              </li>
              <li className="flex items-start gap-3">
                <a
                  href="mailto:info@connectingcybernetworks.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-pink-600" />
                  info@connectingcybernetworks.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <a href="tel:+918591130192" className="flex items-center gap-2">
                  <Phone className="mt-0.5 h-5 w-5 text-pink-600" />
                  +91 85911 30192
                </a>
              </li>
              <li className="flex items-start gap-3">
                <a href="tel:+917777097791" className="flex items-center gap-2">
                  <PhoneCall className="mt-0.5 h-5 w-5 text-pink-600" />
                  +91 77770 97791
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-pink-600" />
                Mon-Sat: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          {/* Right: Courses */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-gray-900">
              Courses
            </h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li>
                <a href="#" className="transition hover:text-[#ff2056]">
                  Cyber Security Associate
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#ff2056]">
                  Cyber Security Professional
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#ff2056]">
                  Cyber Security Expert
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="mt-16 border-t border-gray-200"></div>
      <div className="container mx-auto max-w-7xl px-6 py-6 text-sm">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-600">
            © 2025 Connecting Cyber Networks. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6 text-gray-600">
            <li>
              <a href="#" className="transition hover:text-[#ff2056]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ff2056]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ff2056]">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Section12;
