import React from "react";
import Image from "next/image";

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
    <div className="bg-white shadow-md text-center p-7 transition duration-300 hover:shadow-xl rounded-xl">
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
      <p className="font-montserrat text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
};

const OurUserSection = () => {
  return (
    <section className="bg-slate-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-800 mb-3 font-montserrat text-sm md:text-base">
        Our Users
        </p>
        <h2 className="text-customBlue font-raleway text-3xl md:text-5xl font-bold capitalize leading-snug">
        Who can benefit from InterviewAI?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {userTypes.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurUserSection;
