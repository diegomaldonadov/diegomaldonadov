import React from "react";
// count up
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
// Link
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h5 className="h5 mb-4">
              I'm a front-end developer looking to learn and work with the
              latest technologies. I'm always seeking new challenges and
              opportunities to grow my skills and expand my knowledge, and
              always willing to adapt and learn new things.
            </h5>
            <p className="mb-6">
              I consider myself a person who is constantly changing for a better
              version of himself, personally and professionally, strongly
              passionate about learning new things, also currently learning more
              about automation with Python.
            </p>
            {/* stats */}
            <div className="flex pt-3 gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient
                mb-2"
                >
                  {inView ? (
                    <CountUp start={0} end={2} decimals={1} duration={4} />
                  ) : null}
                </div>
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Years of <br />
                Experience
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  offset={-200}
                  className="cursor-pointer"
                >
                  <button className="btn btn-lg">Contact me</button>
                </Link>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
