import Link from "next/link";
import React from "react";

const InstantTestSection = () => {
  return (
    <section className="bg-green-950 py-20 text-center">
      <h2 className="text-7xl text-white font-raleway capitalize text-center font-semibold">
        Start Your Instant Interview Test Today!
      </h2>
      <p class="text-xl text-gray-200 mt-4 text-center">
        Practice with real-time feedback and land your dream job.
      </p>
      <Link href="/" className="px-6 py-2 bg-white text-customBlue font-montserrat text-lg inline-block mt-4 shadow-lg hover:-translate-y-2 duration-150 rounded-md">
      Start Now
      </Link>
    </section>
  );
};

export default InstantTestSection;
