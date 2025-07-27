import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  // ... your same testimonials
  {
    name: 'NEHA SHARMA',
    location: 'Pune',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      'Enrolling at CCN was one of the best decisions I’ve made. The instructors are extremely knowledgeable and approachable. I went from zero to securing a role as SOC Analyst in just a few months. Highly recommended!',
    stars: 5,
    link: 'https://maps.app.goo.gl/ABC123xyz1',
  },
  {
    name: 'RAHUL VERMA',
    location: 'Delhi',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      'The hands-on labs and real-world scenarios helped me grasp complex topics easily. Ashish Sir and the team genuinely care about student success. I cracked my interview at Wipro on the first attempt!',
    stars: 5,
    link: 'https://maps.app.goo.gl/XYZ456def2',
  },
  {
    name: 'PRIYA YADAV',
    location: 'Bangalore',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      'From beginner to professional, my journey with CCN was transformative. The structured curriculum and expert guidance helped me land a job as a Network Security Analyst at Infosys.',
    stars: 5,
    link: 'https://maps.app.goo.gl/LMN789uvw3',
  },
  {
    name: 'SACHIN RAO',
    location: 'Hyderabad',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      'If you’re serious about a career in cybersecurity, look no further. The institute offers amazing content and placement support. I’m currently working with a top MNC thanks to their guidance.',
    stars: 5,
    link: 'https://maps.app.goo.gl/TUV101abc4',
  },
  {
    name: 'KAVITA JAIN',
    location: 'Ahmedabad',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      'The team at CCN not only taught us technical skills but also helped build our confidence. I had no IT background and still got placed in a security role. Eternally grateful!',
    stars: 5,
    link: 'https://maps.app.goo.gl/HJK123ghi5',
  },
  {
    name: 'ROHIT KUMAR',
    location: 'Chennai',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      "Ashish Sir's teaching style is unique—he simplifies even the toughest concepts. I highly recommend CCN to anyone looking to enter cybersecurity. Great value and great team.",
    stars: 5,
    link: 'https://maps.app.goo.gl/DEF456jkl6',
  },
  {
    name: 'ANITA GUPTA',
    location: 'Lucknow',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      'The personalized mentorship I received here was unmatched. I felt supported throughout the course. I am now working in an L1 Security Operations Center thanks to CCN’s placement help.',
    stars: 5,
    link: 'https://maps.app.goo.gl/PQR321mno7',
  },
  {
    name: 'MOHD FAISAL',
    location: 'Jaipur',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      'Best institute for anyone looking to break into the cybersecurity industry. They focus on practical knowledge which really helps during job interviews and on-the-job tasks.',
    stars: 5,
    link: 'https://maps.app.goo.gl/STU654pqr8',
  },
  {
    name: 'DIVYA RANI',
    location: 'Kolkata',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      'I joined as a complete beginner but the structured approach and expert trainers helped me grasp networking, firewalls, and incident response. Today I’m employed and confident in my role.',
    stars: 5,
    link: 'https://maps.app.goo.gl/XYZ987stu9',
  },
  {
    name: 'SANDEEP KUMAR',
    location: 'Indore',
    course: 'Cyber Security',
    image: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png',
    review:
      'The classes were interactive and always up-to-date with industry needs. Resume preparation, mock interviews, and career guidance all helped me land my current job.',
    stars: 5,
    link: 'https://maps.app.goo.gl/ABC000vwx0',
  },
];

const Section8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 640 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerView, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + cardsPerView, (totalPages - 1) * cardsPerView)
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-300 to-yellow-300 opacity-50 blur-2xl"></div>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium text-gray-500 text-center">
          Point of view matters
        </p>
        <h2 className="mt-2 text-3xl font-bold md:text-5xl text-center">
          What our learners say
        </h2>

        {/* Cards Container */}
        <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-300">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full px-2 transition-all duration-300 ease-in-out"
            >
              <div className="group relative h-full rounded-lg bg-white p-6 shadow-md sm:p-8">
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-indigo-400/30 via-sky-400/20 to-purple-400/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="mb-4 flex gap-1 text-amber-400">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 sm:h-5 sm:w-5"
                    />
                  ))}
                </div>
                <p className="mb-6 text-base leading-relaxed text-gray-800 sm:text-lg">
                  “{testimonial.review}”
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 sm:text-sm">
                      Learner from {testimonial.location}
                    </p>
                    <p className="text-xs font-medium text-indigo-600">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center gap-6">
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-indigo-600 text-white shadow hover:bg-indigo-700 h-9 px-4 py-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
                        style={{ height: 20, marginRight: 8 }}
                        alt="Google Review"
                      />
                      View on Google Reviews
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav Buttons */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 p-3 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerView >= testimonials.length}
            className="rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 p-3 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * cardsPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i * cardsPerView
                  ? 'bg-indigo-600'
                  : 'bg-gray-300 hover:bg-indigo-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8;
