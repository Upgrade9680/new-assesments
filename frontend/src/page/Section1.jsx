import React from 'react';
import { CircleCheckBig, CirclePlay } from 'lucide-react';
import CyberImage from '../assets/cybersecurity.png';
const Section1 = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-center bg-no-repeat bg-cover py-24 text-gray-100"
      style={{ backgroundImage: `url(${CyberImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Experience CCN’s{' '}
          <span className="text-primary-400">FREE Demo Session</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Curious about how our classes feel? Join an obligation-free demo to
          see our hands-on labs, talk to trainers, and gauge the learning vibe
          before you commit.
        </p>

        {/* Features List */}
        <ul className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2 text-left">
          {[
            'Live walk-through of our cyber-lab & tools',
            'Meet mentors & clarify career doubts in real-time',
            'Sneak-peek into interview prep & placement portal',
            'Zero payment — just fill the enquiry form',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CircleCheckBig className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-400" />
              <span className="text-base font-medium text-gray-100">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#enquiry-form"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#ff2056] px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-primary-500/30 transition"
        >
          <CirclePlay className="h-6 w-6" />
          Register for Demo
        </a>
      </div>

      {/* Decorative Background Circles */}
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[#ff2056] blur-3xl opacity-0"
      ></div>
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-emerald-400 blur-3xl opacity-0"
      ></div>
    </section>
  );
};

export default Section1;
