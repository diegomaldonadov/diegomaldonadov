import React, { useRef } from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// emailjs dependencies
import emailjs from "emailjs-com";

const Contact = () => {
  const refForm = useRef();

  const sendEmailHandler = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_6pprqtl",
        "template_v4hwurf",
        refForm.current,
        "bnbXfSNHBJMFhCnPI"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto max-h-[85vh]">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-content items-center"
          >
            <div>
              <h4
                className="text-xl uppercase text-accent font-medium mb-2
              tracking-wide"
              >
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0">
                Feel free to get in touch! I'm always looking for new and exciting
                projects to work on, you can contact me through the form on this
                page, or by emailing me directly. I'll get back to you as soon as
                possible. Thank you for taking the time to see my portfolio!
            </p>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col 
            gap-y-6 pb-24 p-6 items-start"
            ref={refForm}
            onSubmit={sendEmailHandler}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full"
              type="text"
              name="reply_to"
              placeholder="Name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full resize-none mb-12"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <input type="submit" className="btn btn-sm" value="SEND" />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
