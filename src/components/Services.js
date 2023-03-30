import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
// type animation
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

//services data
const Services = () => {
  const services = [
    {
      name: "Front-End Creation",
      description:
        "Build front-end features, using best practices to improve performance. Collaborate with back-end developers and UI/UX.",
    },
    {
      name: "Web Development",
      description:
        "Build single web applications using mern stack framework. QA and Tests.",
    },
    {
      name: "UI/UX Design",
      description:
        "Improve user's interaction and customer satisfaction, helping to boost business growth.",
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat lg:mb-0
          mix-blend-lighten mb-12 sm:bg-services sm:bg-bottom sm:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a front-end developer with 2 years of experience.
            </h3>
            <a href="https://github.com/diegomaldonadov?tab=repositories"
               target="_blank">
                <button className="btn btn-sm">See my work</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            {/* services list */}
            <div className="md:mt-8 sm:mt-8">
              {services.map((service, index) => {
                // destructure
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] 
                  flex mx-auto"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4
                        className="text-[20px] tracking-wider font-primary 
                      font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">{link}Learn</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
