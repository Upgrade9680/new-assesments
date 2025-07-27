// components/CCNAdvantage.jsx
import {
  Users,
  Globe,
  GraduationCap,
  Layers,
  Briefcase,
  Compass,
} from 'lucide-react';

const features = [
  {
    icon: <Users className="h-8 w-8 text-orange-500" />,
    color: 'bg-gray-50',
    title: 'Immersive Classroom Experience',
    desc: 'Live, mentor-led sessions at CCN create a vibrant classroom atmosphere focused on real-world security challenges.',
    bullets: [
      'Hands-on labs every week',
      'Mentors with 10+ yrs industry exposure',
    ],
  },
  {
    icon: <Globe className="h-8 w-8 text-rose-500" />,
    color: 'bg-gray-50',
    title: 'Globally Recognised Certification',
    desc: 'CCN credentials are respected by multinational corporations and validate your practical cyber-defence skills.',
    bullets: ['Mapped to international frameworks'],
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
    color: 'bg-gray-50',
    title: 'Hands-on Training by Industry Experts',
    desc: 'Seasoned professionals guide you through tools & techniques that hiring managers actually test for.',
    bullets: ['Red-team & blue-team drills', 'Continuous feedback loops'],
  },
  {
    icon: <Layers className="h-8 w-8 text-sky-500" />,
    color: 'bg-gray-50',
    title: 'Real-world Projects & Case Studies',
    desc: 'Tackle live security incidents, vulnerability assessments and compliance audits drawn from partner companies.',
    bullets: ['Incident-response playbooks', 'Report writing practice'],
  },
  {
    icon: <Briefcase className="h-8 w-8 text-emerald-500" />,
    color: 'bg-gray-50',
    title: '360° Degree Career Support',
    desc: 'From CV workshops to mock interviews, CCN Career Cell ensures you present a job-ready profile.',
    bullets: [
      'Unlimited interview scheduling',
      'Lifetime doubt-buster sessions',
    ],
  },
  {
    icon: <Compass className="h-8 w-8 text-cyan-600" />,
    color: 'bg-gray-50',
    title: 'CCN Alumni Status',
    desc: 'Join an elite network of cybersecurity professionals, access private events and partner discounts for life.',
    bullets: ['Global alumni Slack', 'Early access to refresher courses'],
  },
];
function Section5() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">The CCN Advantage</h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
              <ul className="space-y-2 text-left text-sm">
                {feature.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="inline-block h-2 w-2 translate-y-1.5 rounded-full bg-primary"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent via-white/30 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5;
