import { CircleCheckBig } from 'lucide-react';

const Section2 = () => {
  const highlights = [
    '💯% Job Placement Guarantee on a written & signed agreement (or fees refunded)',
    'Unlimited interview opportunities until placement',
    'Lifetime course upgradation (no extra charges)',
    'Hands‑on practical labs on device (80% Practical / 20% Theory)',
    'Daily class video recordings',
    'CCNA',
    'CEH',
    'CCNP Security',
    'Checkpoint Firewall (CCSA)',
    'Palo Alto Firewall (PCNSA)',
    'Forensic Investigation',
    'Bug Bounty',
    'Lifetime consultation programme',
    'Soft skills & mock interviews training included',
    '100% placement guaranteed on bond',
    'Lifetime placement guarantee (no additional charges)',
    'On‑site soft skills & technical interview preparation',
    'No charges for repeating the batch',
    '24/7 CCN Data Center & practice lab access',
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
          Why Connecting Cyber Networks?
        </h2>
        <h3 className="mt-4 text-xl font-semibold text-indigo-900">
          Key Highlights
        </h3>
        <ul className="mt-8 grid gap-y-4 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700"
              style={{ opacity: 1, transform: 'none' }}
            >
              <CircleCheckBig className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section2;
