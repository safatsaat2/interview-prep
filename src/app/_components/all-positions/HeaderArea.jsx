import React from "react";

const HeaderArea = () => {
  return (
    <section className="bg-green-950 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-raleway capitalize font-semibold leading-tight">
          Master Every Interview: <br className="hidden md:block" /> All
          Positions Covered
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mt-6 font-montserrat leading-relaxed">
          Prepare with confidence for any job interview! Whether you're a
          student, a job seeker, or a professional aiming for your next big
          role, our platform offers tailored interview practice for all
          positions. Gain real-time feedback, improve your responses, and master
          the art of interviewing with ease.
        </p>
      </div>
    </section>
  );
};

export default HeaderArea;
