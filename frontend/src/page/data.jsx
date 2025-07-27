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

const VerticalTimeline = () => {
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
    <div className="bg-white text-gray-800 min-h-screen py-250 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-4xl mx-auto relative pl-8 overflow-hidden"
        ref={containerRef}
      >
        {/* Vertical background line */}
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

        {/* Timeline items */}
        <ul className="space-y-12 mt-6">
          {timelineData.map((item, index) => (
            <li key={index} className="relative">
              <span className="absolute -left-6.5 mt-2 h-3 w-3 rounded-full bg-indigo-500"></span>
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
  );
};

export default VerticalTimeline;
