import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img21.png";
import Img3 from "../assets/portfolio-img31.png";
import Img4 from "../assets/portfolio-img4.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              {/* text */}
              <h2 className="h2 leading-tight text-accent">
                My latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                My latest project was the creation of this portfolio. I had
                worked recently with clients on a Scrum Framework developing new
                front-end features using React. This is a WIP as I'm
                continuously building new apps and developing my skills!
              </p>
              <a
                href="https://github.com/diegomaldonadov?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm">View all projects</button>
              </a>
              {/* image */}
            </div>
            <div
              className=" group relative overflow-hidden border-2 
              border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
                z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              ></img>
              {/* pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 
                transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design Tailwind</span>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 
                transition-all duration-700 z-50"
              >
                <span className="text-gradient">Portfolio</span>
              </div>
            </div>
            <div
              className=" group relative overflow-hidden border-2 
              border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
                z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt=""
              ></img>
              {/* pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 
                transition-all duration-500 z-50 mb-5"
              >
                <span className="text-gradient">Sticky Notes App - React.JS</span>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 
                transition-all duration-700 z-50"
              >
                <a
                  href="https://diegomaldonadov.github.io/StickyNotesApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm">View live demo</button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 lg:mt-16"
          >
            <div
              className=" group relative overflow-hidden border-2 
                border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
                  z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              ></img>
              {/* pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 
                  transition-all duration-500 z-50 mb-5"
              >
                <span className="text-gradient">
                  ToDo List - Vanilla JavaScript
                </span>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 
                  transition-all duration-700 z-50"
              >
                <a
                  href="https://diegomaldonadov.github.io/todoList/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm">View live demo</button>
                </a>
              </div>
            </div>
            <div
              className="group relative overflow-hidden border-2 
                border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
                  z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              ></img>
              {/* pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 
                  transition-all duration-500 z-50 mb-5"
              >
                <span className="text-gradient">
                  Expense Tracker - React.JS
                </span>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 
                  transition-all duration-700 z-50"
              >
                <a
                  href="https://diegomaldonadov.github.io/ExpenseTrackerApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm">View live demo</button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
