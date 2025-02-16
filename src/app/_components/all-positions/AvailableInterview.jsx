"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const userTypes = [
  {
    image: "/values-1.png",
    title: "Students and Recent Graduates",
    description:
      "Practice answering tailored interview questions and gain confidence for your job search.",
  },
  {
    image: "/values-2.png",
    title: "Job Seekers and Candidates",
    description:
      "Practice answering common interview questions and improve your performance.",
  },
  {
    image: "/values-3.png",
    title: "Remote Workers and Freelancers",
    description:
      "Ace virtual job interviews with AI-generated, tailored questions and personalized feedback.",
  },
];

const UserCard = ({ image, title, description, onClick }) => {
  return (
    <div className="bg-white shadow-md text-center p-7 transition duration-300 hover:shadow-xl rounded-xl flex flex-col h-full">
      <div className="overflow-hidden flex justify-center">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="transform scale-110 transition duration-500 hover:scale-100"
        />
      </div>
      <h3 className="text-[20px] md:text-[24px] text-customBlue font-raleway font-bold mt-4 mb-2">
        {title}
      </h3>
      <p className="font-montserrat text-gray-600 text-sm md:text-base flex-grow">
        {description}
      </p>
      <button
        onClick={() => onClick(title)}
        className="px-6 py-2 bg-customBlue text-white font-montserrat text-lg inline-block mt-4 shadow-lg hover:-translate-y-2 duration-150 rounded-md"
      >
        Start Now
      </button>
    </div>
  );
};

const AvailableInterview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const openModal = (title) => {
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  const formatTitle = (title) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="bg-slate-200 py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-center text-customBlue md:text-4xl lg:text-6xl font-raleway capitalize font-semibold leading-tight mb-10">
          Available Interviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <UserCard key={index} {...user} onClick={openModal} />
          ))}
        </div>
      </div>

      {/* AnimatePresence ensures smooth exit animations */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Modal Box with Perfect Centering */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              <div className="bg-white px-6 py-8 rounded-lg shadow-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] max-w-3xl text-center relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3334 13.3333L2.66669 2.66663M13.3334 2.66663L2.66669 13.3333"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <h3 className="text-2xl font-bold text-customBlue font-raleway mb-5">
                  Choose Your Interview Type
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    className="bg-slate-200 px-6 py-3 rounded-md font-montserrat text-gray-700 text-sm md:text-base font-bold hover:bg-slate-300 transition"
                    href={`/all-positions/m-question/${formatTitle(selectedTitle)}`}
                  >
                    Multiple Questions
                  </Link>
                  <Link
                    className="bg-slate-200 px-6 py-3 rounded-md font-montserrat text-gray-700 text-sm md:text-base font-bold hover:bg-slate-300 transition"
                    href={`/all-positions/s-question/${formatTitle(selectedTitle)}`}
                  >
                    Summary Question
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Overlay with Fade Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-screen h-screen bg-black z-40"
              onClick={() => setIsModalOpen(false)}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AvailableInterview;
