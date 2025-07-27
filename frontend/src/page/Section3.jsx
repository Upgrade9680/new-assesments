import { useEffect, useRef, useState } from 'react';

const timelineData = [
  {
    title: 'Hands-on Practical Labs',
    description:
      'Train on real devices with an 80% practical / 20% theory mix.',
  },
  {
    title: 'Daily Class Recordings',
    description:
      'Every session is recorded so you can revisit lessons anytime.',
  },
  {
    title: 'Written Placement Guarantee',
    description:
      'Unlike other centers, CCN backs its promise with documentation, not just words.',
  },
  {
    title: 'Lifetime Placement Support',
    description:
      'Continuous placement assistance with zero additional fees throughout your career.',
  },
  {
    title: 'On-site Soft-Skills & Interview Prep',
    description:
      'English communication coaching plus technical interview practice on campus.',
  },
  {
    title: 'Repeat Batches Free',
    description: 'Need a refresher? Re-join any batch without paying again.',
  },
  {
    title: '24 / 7 CCN Centre & Data-Center Access',
    description:
      'Study or practise whenever you like—our facility and cyber-lab are always open.',
  },
  {
    title: 'Unlimited Interviews',
    description:
      'You can attend as many interviews as needed until you get placed.',
  },
  {
    title: 'Lifetime Course Upgradation',
    description:
      'Future course updates are always free—no extra charges, ever.',
  },
  {
    title: '💯 % Job Placement Guarantee',
    description:
      'A written & signed agreement promises placement—otherwise your fees are refunded.',
  },
];

const Section3 = () => {
  const containerRef = useRef(null);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalHeight = container.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollPercent = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );

      setProgressHeight(scrollPercent * totalHeight);
    };

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="bg-white w-full py-12">
      <div className="mx-auto flex flex-col md:grid max-w-7xl gap-12 px-6 lg:grid-cols-[auto_1fr]">
        {/* Sidebar Form */}
        <aside className="md:sticky top-20 flex flex-col gap-12 self-start lg:w-80 xl:w-96">
          <form className="rounded-lg border border-gray-200 bg-white p-6 shadow space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">
              Talk to Our Expert
            </h4>
            <p className="text-sm text-gray-600">
              Please share your details and we will reach out to you soon.
            </p>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              className="w-full rounded-md border px-4 py-2 text-sm border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              required
              className="w-full rounded-md border px-4 py-2 text-sm border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
            />
            <input
              id="city"
              name="city"
              type="text"
              placeholder="City"
              required
              className="w-full rounded-md border px-4 py-2 text-sm border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
            />

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here... (optional)"
                className="w-full rounded-md border px-4 py-2 text-sm text-gray-900 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            {/* Captcha placeholder */}
            <div className="pt-2">
              <iframe
                title="reCAPTCHA"
                width="304"
                height="78"
                src="https://www.google.com/recaptcha/api2/anchor?..."
                className="rounded border"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Enquire Now
            </button>
          </form>

          <div className="space-y-10">
            <section>
              <h3 className="text-2xl font-semibold text-gray-900">
                Comprehensive Curriculum
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Our cybersecurity course curriculum, meticulously crafted and
                delivered by Industry‑Expert Trainers, offers a dynamic fusion
                of academic depth and real‑world know‑how.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-semibold text-gray-900">
                Know Your Trainer
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                A seasoned pro in the very field you’re passionate about. Beyond
                learning, this is your golden ticket to tap into their years of
                hands‑on expertise.
              </p>
            </section>
          </div>
        </aside>

        {/* Timeline Features */}
        <div className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl mx-auto relative pl-8 overflow-hidden"
            ref={containerRef}
          >
            {/* Static vertical line */}
            <span className="absolute left-3 top-0 h-full w-px bg-indigo-200"></span>

            {/* Animated progress line */}
            <span
              className="absolute left-[11px] top-0 w-[3px] bg-indigo-500 z-10 transition-all duration-100"
              style={{ height: `${progressHeight}px` }}
            ></span>

            {/* Moving dot */}
            <div
              className="absolute left-[3px] w-[20px] h-[20px] rounded-full bg-indigo-500 z-20 transition-all duration-100"
              style={{ top: `${progressHeight}px` }}
            ></div>

            {/* Timeline Items */}
            <ul className="space-y-12 mt-6">
              {timelineData.map((item, index) => (
                <li key={index} className="relative">
                  <span className="absolute -left-6 mt-2 h-3 w-3 rounded-full bg-indigo-500"></span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
