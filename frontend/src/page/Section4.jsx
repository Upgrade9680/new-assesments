import React from 'react';
import { CreditCard, BookOpen, Briefcase } from 'lucide-react';
import Free from '../assets/fee.jpg';
import cybersecurity from '../assets/course.jpg';
import Placement from '../assets/placement.svg';
const Section4 = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          Simple and Effective Flow
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div className="relative flex flex-col items-center rounded-xl bg-white p-8 shadow-lg group">
            <span
              className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-sky-100 to-indigo-50 opacity-0 group-hover:opacity-100"
              style={{ transform: 'scale(1.09902)' }}
            ></span>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
              <CreditCard className="h-8 w-8 text-indigo-500" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Fee Structure
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Our course is affordable, offers value-packed learning and easy
              EMI options.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Affordable
              </span>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Value-packed
              </span>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Flexible EMI
              </span>
            </div>
            <img
              src={Free}
              alt="Fee Structure"
              className="h-40 w-full rounded-md object-cover shadow"
              loading="lazy"
            />
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col items-center rounded-xl bg-white p-8 shadow-lg group">
            <span
              className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-sky-100 to-indigo-50 opacity-0 group-hover:opacity-100"
              style={{ transform: 'scale(1.09902)' }}
            ></span>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
              <BookOpen className="h-8 w-8 text-teal-500" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Course Highlights
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Fundamentals and ethical techniques, risk & threat management,
              cloud and network security, interview preparation & soft skills.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Ethical Hacking
              </span>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Risk Mgmt
              </span>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Soft Skills
              </span>
            </div>
            <img
              src={cybersecurity}
              alt="Course Highlights"
              className="h-40 w-full rounded-md object-cover shadow"
              loading="lazy"
            />
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col items-center rounded-xl bg-white p-8 shadow-lg group">
            <span
              className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-sky-100 to-indigo-50 opacity-0 group-hover:opacity-100"
              style={{ transform: 'scale(1.09902)' }}
            ></span>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
              <Briefcase className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Placement Support
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Our placement team ensures you land jobs at leading IT firms and
              MNCs across India.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Resume
              </span>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Interview Prep
              </span>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Job Guarantee
              </span>
            </div>
            <img
              src={Placement}
              alt="Placement Support"
              className="h-40 w-full rounded-md object-cover shadow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
