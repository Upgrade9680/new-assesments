import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
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
    course: 'Ethical Hacking',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    review:
      'Great course with real-world labs. The team ensures every doubt is solved and offers full placement support!',
    stars: 5,
    link: 'https://maps.app.goo.gl/XYZ456abc2',
  },
  {
    name: 'ANJALI MEHRA',
    location: 'Mumbai',
    course: 'Network Security',
    image: 'https://cdn-icons-png.flaticon.com/512/921/921071.png',
    review:
      'Perfect platform to switch to a cybersecurity career. Trainers are supportive, content is job-ready!',
    stars: 5,
    link: 'https://maps.app.goo.gl/DEF789ghi3',
  },
  {
    name: 'VIKAS SINGH',
    location: 'Hyderabad',
    course: 'Penetration Testing',
    image: 'https://cdn-icons-png.flaticon.com/512/236/236831.png',
    review:
      'I never imagined I’d enjoy learning so much. CCN’s hands-on labs gave me the confidence to crack interviews easily.',
    stars: 5,
    link: 'https://maps.app.goo.gl/GHI123jkl4',
  },
  {
    name: 'PRIYA NAIR',
    location: 'Kochi',
    course: 'Cloud Security',
    image: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
    review:
      'Clear concepts, structured learning path, and continuous mentoring — highly recommend CCN to all aspiring cyber professionals.',
    stars: 5,
    link: 'https://maps.app.goo.gl/JKL456mno5',
  },
  {
    name: 'ARUN KUMAR',
    location: 'Bangalore',
    course: 'SOC Training',
    image: 'https://cdn-icons-png.flaticon.com/512/706/706830.png',
    review:
      'Within 3 months of joining CCN, I landed a job in a reputed MNC. The training is completely aligned with industry needs.',
    stars: 5,
    link: 'https://maps.app.goo.gl/MNO789pqr6',
  },
  {
    name: 'SNEHA GUPTA',
    location: 'Jaipur',
    course: 'Red Teaming',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922656.png',
    review:
      'Exceptional instructors and real-world scenarios! I gained confidence and skills I couldn’t find anywhere else.',
    stars: 5,
    link: 'https://maps.app.goo.gl/PQR123stu7',
  },
  {
    name: 'MOHIT RANA',
    location: 'Chandigarh',
    course: 'Cyber Forensics',
    image: 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png',
    review:
      'The course material, mock interviews, and support team are top-notch. I’m proud to be part of the CCN alumni.',
    stars: 5,
    link: 'https://maps.app.goo.gl/STU456vwx8',
  },
  {
    name: 'KAVYA IYER',
    location: 'Chennai',
    course: 'Bug Bounty Hunting',
    image: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
    review:
      'I started from scratch and now earn through bug bounty platforms. CCN made me independent and skilled!',
    stars: 5,
    link: 'https://maps.app.goo.gl/VWX789yz1',
  },
  {
    name: 'RAJAN MEHRA',
    location: 'Ahmedabad',
    course: 'Firewall Security',
    image: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png',
    review:
      'From basic to advanced — every topic was covered deeply. The trainers are always available to help.',
    stars: 5,
    link: 'https://maps.app.goo.gl/YZ123abc3',
  },
  {
    name: 'ISHA SINGH',
    location: 'Indore',
    course: 'SIEM Tools',
    image: 'https://cdn-icons-png.flaticon.com/512/168/168882.png',
    review:
      'Best place to get SIEM training with live tools. CCN’s lab environment is impressive and easy to access.',
    stars: 5,
    link: 'https://maps.app.goo.gl/DEF456ghi4',
  },
  {
    name: 'TARUN DAS',
    location: 'Kolkata',
    course: 'Blue Team Operations',
    image: 'https://cdn-icons-png.flaticon.com/512/145/145867.png',
    review:
      'Team CCN helps you grow with confidence. The real-time simulations and attack-defense modules are unique.',
    stars: 5,
    link: 'https://maps.app.goo.gl/GHI789jkl5',
  },
  {
    name: 'MEENA YADAV',
    location: 'Bhopal',
    course: 'Linux for Hackers',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    review:
      'CCN’s Linux training helped me strengthen my foundation in cybersecurity. The mentors are experienced and friendly.',
    stars: 5,
    link: 'https://maps.app.goo.gl/JKL123mno6',
  },
  {
    name: 'AMAN SHAH',
    location: 'Nagpur',
    course: 'Python for Security',
    image: 'https://cdn-icons-png.flaticon.com/512/3904/3904678.png',
    review:
      'Loved the scripting projects and automation tips. I now automate security tasks at my job thanks to CCN.',
    stars: 5,
    link: 'https://maps.app.goo.gl/MNO456pqr7',
  },
  {
    name: 'DEEPIKA RAI',
    location: 'Lucknow',
    course: 'CompTIA Security+',
    image: 'https://cdn-icons-png.flaticon.com/512/206/206881.png',
    review:
      'CCN’s structured approach helped me clear my Security+ exam in the first attempt. Highly recommended!',
    stars: 5,
    link: 'https://maps.app.goo.gl/PQR789stu8',
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
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const translateX = -(currentIndex * (100 / cardsPerView));

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

        {/* Sliding container */}
        <div className="relative mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full sm:w-1/2 px-2 shrink-0">
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
                      <p className="text-xs font-medium text-[#ff2056]">
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
                      <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-[#ff2056] text-white shadow hover:bg-[#f985a2] h-9 px-4 py-2">
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
            disabled={currentIndex >= totalPages - 1}
            className="rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 p-3 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section8;
