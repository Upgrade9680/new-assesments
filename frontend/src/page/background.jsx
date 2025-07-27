import React, { useState } from 'react';
import BGimage from '../assets/header-image.jpg';
import { ShieldCheck, Download } from 'lucide-react';
const Background = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🚀 Add form submission logic here
    console.log('Form submitted:', formData);
  };
  return (
    <>
      <div
        className="bg-fixed bg-center  bg-cover w-full min-h-screen flex flex-col items-center justify-start text-center text-white px-4 py-12"
        style={{ backgroundImage: `url(${BGimage})` }}
      >
        <div className=" inset-0 flex flex-col items-center justify-center z-10 text-center text-white px-4">
          <div
            className="container mx-auto flex flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:gap-20 lg:py-24"
            style={{ minHeight: '60vh' }}
          >
            <div
              className="w-full lg:w-3/5"
              style={{ opacity: 1, transform: 'none' }}
            >
              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-3 text-xs font-medium">
                <span className="flex items-center gap-2 rounded-full bg-green-600/20 px-3 py-1 text-green-300">
                  <ShieldCheck size={14} />
                  Job guarantee
                </span>
                <span className="flex items-center gap-2 rounded-full bg-yellow-600/20 px-3 py-1 text-yellow-300">
                  ⭐ Hands on learning Experience
                </span>
                <span className="flex items-center gap-2 rounded-full bg-blue-600/20 px-3 py-1 text-blue-300">
                  🧑‍💻 Learn Cyber Security & Ethical Hacking
                </span>
              </div>

              {/* Heading */}
              <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
                Want to become an Expert?
              </h1>

              {/* Paragraph */}
              <p className="mb-4 text-lg leading-relaxed text-gray-300">
                Security is a never-ending process of learning and growing. We
                will help you to become an expert in Cyber Security, Networking,
                Ethical Hacking And Data Science.
              </p>

              {/* Buttons */}
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <a href="#enquiry-form">
                  <button className="rounded-md bg-[#ff2056] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
                    ENQUIRE NOW
                  </button>
                </a>

                <a
                  className="inline-flex bg-teal-500 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow-lg cursor-pointer"
                  href="#brochure"
                >
                  <Download size={16} />
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </div>
          </div>
          <div id="enquiry-form">
            <div className="container relative z-10 -mt-8 mb-16 w-full px-4">
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-5xl flex-col gap-4 rounded-sm bg-white p-8 shadow-2xl md:gap-2 lg:flex-row flex-wrap"
              >
                <h3 className="font-bold text-xl text-gray-900 w-full -mb-2">
                  Reach Out to Us for Expert Guidance
                </h3>
                <p className="w-full text-black">
                  Please share your details and we will reach out to you soon.
                </p>

                {/* Name */}
                <div className="flex-1 space-y-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                {/* Phone */}
                <div className="flex-1 space-y-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                {/* City */}
                <div className="flex-1 space-y-1">
                  <label
                    htmlFor="city"
                    className="text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                {/* Message */}
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here... (optional)"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 my-2"
                    rows={4}
                  ></textarea>
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="w-full">
                  <div className="h-[78px] w-[304px] bg-gray-200 text-center text-sm text-gray-500 flex items-center justify-center rounded-md">
                    [reCAPTCHA placeholder]
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="rounded-md bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                  >
                    Enquire Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
