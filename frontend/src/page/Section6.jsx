import Security from '../assets/cybersecurity.png';

function Section6() {
  return (
    <section className="bg-[#ff2056] my-10 py-16 text-center text-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mt-12 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
          <div className="flex flex-col items-center">
            <img
              src={Security}
              alt="Cyber Security Certificate"
              className="h-auto w-full max-w-md rounded"
            />
          </div>
        </div>

        <h2 className="mx-auto mt-12 max-w-3xl text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
          Find your career path
        </h2>

        <p className="mt-4 max-w-7xl text-xl text-gray-200">
          With new Networking, Cyber Security, Data Science, and Cloud courses
          released each month, our in-house instructors and content creators
          work tirelessly to ensure you and your teams have access to the most
          accurate training material in the industry.
        </p>

        <p className="mt-4 max-w-7xl text-xl text-gray-200">
          Looking to test your knowledge? No problem! Our industry leading lab
          platform will provide you and your teams with the challenges necessary
          to ensure you are confident with your expertise.
        </p>
      </div>
    </section>
  );
}

export default Section6;
