import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react'; // ✅ Lucide icon

const placedStudents = [
  {
    name: 'Talha Khan',
    company: 'VIBS Infosol',
    image: 'https://ccnstoragee.s3.amazonaws.com/Talha_Khan_2_b29f1e02b0.jpg',
  },
  {
    name: 'Himani Panchal',
    company: 'Netplace',
    image: 'https://ccnstoragee.s3.amazonaws.com/Himani_Panchal_aa3c3d3045.png',
  },
  {
    name: 'Rahul Verma',
    company: 'TCS',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    name: 'Sneha Shah',
    company: 'Infosys',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    name: 'Ankit Yadav',
    company: 'Wipro',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    name: 'Pooja Mehta',
    company: 'Capgemini',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
  },
  {
    name: 'Vivek Singh',
    company: 'HCL Technologies',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
  },
  {
    name: 'Neha Raj',
    company: 'Tech Mahindra',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    name: 'Aman Joshi',
    company: 'IBM',
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
  },
  {
    name: 'Kavita Sharma',
    company: 'L&T Infotech',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
  {
    name: 'Saurabh Patel',
    company: 'Cognizant',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
  },
  {
    name: 'Riya Kapoor',
    company: 'Zensar Technologies',
    image: 'https://randomuser.me/api/portraits/women/19.jpg',
  },
  {
    name: 'Deepak Thakur',
    company: 'Mindtree',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
  {
    name: 'Meena Kumari',
    company: 'Persistent Systems',
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    name: 'Rohit Deshmukh',
    company: 'Hexaware',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Isha Agarwal',
    company: 'Amazon',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    name: 'Mohit Rathi',
    company: 'Flipkart',
    image: 'https://randomuser.me/api/portraits/men/24.jpg',
  },
  {
    name: 'Rashmi Nair',
    company: 'Adobe',
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    name: 'Nikhil Bansal',
    company: 'Google',
    image: 'https://randomuser.me/api/portraits/men/26.jpg',
  },
  {
    name: 'Shreya Iyer',
    company: 'Microsoft',
    image: 'https://randomuser.me/api/portraits/women/27.jpg',
  },
];
function Section10() {
  const duplicatedList = [...placedStudents, ...placedStudents]; // For smooth infinite scroll

  return (
    <section className="overflow-hidden bg-white py-16">
      <h2 className="mb-10 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
        Recently Placed Students
      </h2>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8"
          style={{ minWidth: '100%' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedList.map((student, index) => (
            <div
              key={index}
              className="group relative flex w-[250px] flex-col items-center justify-center rounded-sm bg-white p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ minWidth: '250px' }}
            >
              <Trophy className="absolute -top-0 right-2 h-5 w-5 text-amber-400" />{' '}
              {/* ✅ Lucide Trophy */}
              <img
                src={student.image}
                alt={student.name}
                className="h-[225px] w-[225px] rounded-sm object-cover shadow-sm"
                loading="lazy"
                draggable="false"
              />
              <h4 className="mt-3 text-center text-base font-semibold text-gray-900">
                {student.name}
              </h4>
              <p className="text-center text-sm text-primary">
                {student.company}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Section10;
