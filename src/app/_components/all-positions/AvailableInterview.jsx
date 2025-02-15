import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const UserCard = ({ image, title, description }) => {
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
      <Link
        href="#"
        className="px-6 py-2 bg-customBlue text-white font-montserrat text-lg inline-block mt-4 shadow-lg hover:-translate-y-2 duration-150 rounded-md"
      >
        Start Now
      </Link>
    </div>
  );
};

const AvailableInterview = () => {
  return (
    <section className="bg-slate-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-center text-customBlue md:text-4xl lg:text-6xl font-raleway capitalize font-semibold leading-tight mb-10">
          Available Interviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableInterview;
