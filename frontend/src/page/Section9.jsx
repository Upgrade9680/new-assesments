import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const logos = [
  {
    name: 'Netplace',
    src: 'https://ccnstoragee.s3.amazonaws.com/netplace_f7c05a5c22.png',
  },
  {
    name: 'Softcell',
    src: 'https://ccnstoragee.s3.amazonaws.com/softcell_4d195908f0.png',
  },
  {
    name: 'Synoptics',
    src: 'https://ccnstoragee.s3.amazonaws.com/synoptics_f12d2563f2.png',
  },
  {
    name: 'RTNetworks',
    src: 'https://ccnstoragee.s3.amazonaws.com/rtnetworks_2d35ef1f0c.png',
  },
  {
    name: 'OA',
    src: 'https://ccnstoragee.s3.amazonaws.com/OA_251aaa5e0e.png',
  },
  {
    name: 'Wyred',
    src: 'https://ccnstoragee.s3.amazonaws.com/wyred_e964092b54.png',
  },
  {
    name: 'Tata Communications',
    src: 'https://ccnstoragee.s3.amazonaws.com/tata_comm.png',
  },
  {
    name: 'DigitalTrack',
    src: 'https://ccnstoragee.s3.amazonaws.com/digitaltrack.png',
  },
  {
    name: 'HCL',
    src: 'https://ccnstoragee.s3.amazonaws.com/hcl_logo.png',
  },
  {
    name: 'Tech Mahindra',
    src: 'https://ccnstoragee.s3.amazonaws.com/tech_mahindra.png',
  },
];

// Duplicate for seamless scroll
const infiniteLogos = [...logos, ...logos];

const Section9 = () => {
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (scrollWidth > 0) {
      controls.start({
        x: [-scrollWidth, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        },
      });
    }
  }, [scrollWidth, controls]);

  return (
    <section className="bg-white py-16 overflow-hidden">
      <h2 className="mb-10 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
        Our Placement Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12"
          ref={containerRef}
          animate={controls}
        >
          {infiniteLogos.map((logo, index) => (
            <div
              key={index}
              className="flex h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 min-w-32 md:min-w-40 lg:min-w-48 items-center justify-center transition hover:grayscale-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-full object-contain"
                draggable="false"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section9;
