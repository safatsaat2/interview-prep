import Image from "next/image";
import React from "react";

const features = [
  "Improved performance",
  "Practice and feedback",
  "Convenient and flexible",
  "Cost-effective efficiency",
];

const FeatureItem = ({ text }) => (
  <div className="flex items-center bg-slate-200 p-4 gap-2 rounded-md text-lg font-bold text-slate-700 font-montserrat hover:bg-customBlue hover:text-white transition icon-wrapper">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C13.18 21 14.35 20.77 15.44 20.31C16.53 19.86 17.53 19.2 18.36 18.36C19.2 17.53 19.86 16.53 20.31 15.44C20.77 14.35 21 13.18 21 12C21 10.81 20.77 9.65 20.31 8.56C19.86 7.46 19.2 6.47 18.36 5.64C17.53 4.8 16.53 4.14 15.44 3.69C14.35 3.23 13.18 3 12 3C9.61 3 7.32 3.95 5.64 5.64C3.95 7.32 3 9.61 3 12C3 14.39 3.95 16.68 5.64 18.36C7.32 20.05 9.61 21 12 21ZM11.77 15.64L16.77 9.64L15.23 8.36L10.93 13.52L8.71 11.29L7.29 12.71L10.29 15.71L11.07 16.48L11.77 15.64Z"
        fill="black"
      />
    </svg>
    <span>{text}</span>
  </div>
);

const WhyUsSection = () => {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-800 mb-4 font-montserrat">Features</p>
        <h2 className="text-customBlue font-raleway text-6xl font-bold capitalize">
          Practice interviews with Us
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-10 gap-10">
          <div className="md:w-1/2">
            <Image
              src="/interview.webp"
              className="rounded-md"
              width={600}
              height={800}
              alt="women interviewing"
              priority
              placeholder="blur"
              blurDataURL="/interview.webp"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-lg font-medium text-slate-500 font-montserrat mb-4">
              Gain the confidence you need to succeed in your next interview.
              Practice with us and get real-time feedback to improve your
              answers, body language, and overall performance.
            </h3>
            <div className="flex flex-wrap gap-5">
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
