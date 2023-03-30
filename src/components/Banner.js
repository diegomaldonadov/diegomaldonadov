import React from "react";
// images
import Image from "../assets/avatar1.png";
// icons
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaWhatsapp,
} from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// Link
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12"
        >
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] pb-3 font-bold leading-[0.8] lg:text-[80px]"
            >
              DIEGO <br /> <span>MALDONADO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary
              font-semibold uppercase leading-[-1]"
            >
              <span className="mr-4">I AM A</span>
              <TypeAnimation
                sequence={[
                  "Front-End",
                  2000,
                  "Developer",
                  2000,
                  "Engineer",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hello! I am a passionate Front-end React Developer based on
              Monterrey, Mexico.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12
              mx-auto lg:mx-0"
            >
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

              <a
                href="https://drive.google.com/file/d/1TzG9IVNT47J_7aTGpB9SWli4CU2Yz0xy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient btn-link"
              >
                Download CV
              </a>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/diegomaldonadov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/diegomaldonadov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/528127246768?text=Hello%20Diego"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="mx-auto flex-wrap items-center"
          >
            <img
              className="lg:max-w-[482px] sm:max-w-[200px] mx-8 "
              src={Image}
              alt=""
            />
            <h2 className="h2 text-accent mt-7 text-center"> Tech Stack</h2>
            <div className="flex gap-x-6 max-w-max mx-auto">
              <FaHtml5 className="mt-2" />
              <FaCss3 className="mt-2" />
              <FaSass className="mt-2" />
              <FaJsSquare className="mt-2" />
              <FaReact className="mt-2" />
              <FaNodeJs className="mt-2" />
              <FaPython className="mt-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
