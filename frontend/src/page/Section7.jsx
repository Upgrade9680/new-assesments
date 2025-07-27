import { User, Zap, Lightbulb, Check } from 'lucide-react';

const plans = [
  {
    icon: <User className="h-6 w-6 text-primary" />,
    title: 'Cyber Security Associate',
    description: 'Job ready course for beginners in Cyber Security',
    features: [
      'CCNA',
      'CEH',
      'Security Cisco ASA Firewall + VPN',
      'Checkpoint Firewall (CCSA)',
      'Palo Alto Firewall (PCNSA)',
      'Maximum 5 Interviews',
      '100% placement guaranteed on bond',
    ],
    duration: '10 months',
    buttonClass: 'bg-blue-800 hover:bg-gray-700 focus:ring-gray-500',
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Cyber Security Professional',
    description: 'Advanced course to become Cyber Security Professionals',
    features: [
      'CCNA',
      'CEH',
      'CCNP Security',
      'Checkpoint Firewall (CCSA)',
      'Palo Alto Firewall (PCNSA)',
      'N no. of Interviews',
      'Lifetime Course Upgrade',
      '100% placement guaranteed on bond',
      'Lifetime Consultation Programme',
      'Soft Skill + Mock Interview Preparation',
    ],
    duration: '15 months',
    cardClass: 'bg-gradient-to-b from-indigo-800/30',
    buttonClass: 'bg-[#ff2056] hover:bg-destructive focus:ring-white',
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: 'Cyber Security Expert',
    description: 'On the road to becoming a Cyber Security Expert',
    features: [
      'CCNA',
      'CEH',
      'CCNP Security',
      'Checkpoint Firewall (CCSA)',
      'Palo Alto Firewall (PCNSA)',
      'Forensic Investigation',
      'Bug Bounty',
      'N no. of Interviews',
      'Lifetime Course Upgrade',
      '100% placement guaranteed on bond',
      'Lifetime Consultation Programme',
      'Soft Skill + Mock Interview Preparation',
    ],
    duration: '18 months',
    buttonClass: 'bg-blue-800 hover:bg-gray-700 focus:ring-gray-500',
  },
];

const Section7 = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-80 bg-gradient-to-b from-indigo-600/20 to-transparent blur-3xl" />
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Choose what you need</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400">
          We offer flexible pricing plans to suit your needs. Whether you're
          just starting out or scaling your business, we have a plan for you.
        </p>
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col rounded-md border border-white bg-teal-500 p-8 shadow-md ${
                plan.cardClass || ''
              }`}
              style={{ opacity: 1, transform: 'none' }}
            >
              <div className="mb-6 flex items-center gap-3 text-white">
                {plan.icon}
                <h3 className="text-xl font-semibold">{plan.title}</h3>
              </div>
              <p className="mb-6 text-sm text-white">{plan.description}</p>
              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-white"
                  >
                    <Check className="h-4 w-4 flex-shrink-0 font-bold text-black" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8 text-left text-white text-base font-medium">
                <span className="block mb-2 w-fit rounded-full px-3 py-1 text-sm font-semibold">
                  Duration: {plan.duration}
                </span>
              </div>
              <a
                href="#enquiry-form"
                className={`mt-6 rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white ${plan.buttonClass}`}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
