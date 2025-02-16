import React from "react";

const HeaderArea = ({ title }) => {
  return (
    <section className="bg-green-950 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-raleway capitalize font-semibold leading-tight">
          Here is All Questions For {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mt-6 font-montserrat leading-relaxed">
          Explore all the essential questions tailored specifically for {title}!
          Whether you're preparing for a technical interview, a behavioral
          round, or any specific industry-related questions, we've got you
          covered. Practice, refine your answers, and get ready to impress with
          confidence in every interview. Start mastering the questions that
          matter most to your career goals today!
        </p>
      </div>
    </section>
  );
};

export default HeaderArea;
