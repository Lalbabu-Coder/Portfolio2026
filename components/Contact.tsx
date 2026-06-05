"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Card3D from "@/components/Card3D";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-20">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-center text-4xl md:text-5xl font-extrabold
          bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600
          bg-clip-text text-transparent
          drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]
          dark:drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]
        "
      >
        Get In Touch
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-center text-slate-600 dark:text-gray-300 font-sans">
        Have a project in mind or want to discuss opportunities?
        I’d love to hear from you.
      </p>

      {/* TWO CARDS */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

        {/* SEND MESSAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Card3D className="
            relative p-10 rounded-3xl
            bg-white/60 dark:bg-white/5 backdrop-blur-xl
            border border-slate-200/80 dark:border-white/10
            shadow-[0_0_40px_rgba(59,130,246,0.06)] dark:shadow-[0_0_40px_rgba(59,130,246,0.15)]
            hover:border-blue-500/60
            hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_80px_rgba(59,130,246,0.45)]
            transition-all duration-300 cursor-default
          ">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-8 drop-shadow-[0_0_10px_rgba(59,130,246,0.2)] dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] font-display" style={{ transform: "translateZ(10px)" }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" style={{ transformStyle: "preserve-3d" }}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-slate-100/80 dark:bg-black/40 text-slate-800 dark:text-gray-200
                  border border-slate-200/80 dark:border-white/10
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500/30
                  transition
                "
                style={{ transform: "translateZ(15px)" }}
                required
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-slate-100/80 dark:bg-black/40 text-slate-800 dark:text-gray-200
                  border border-slate-200/80 dark:border-white/10
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500/30
                  transition
                "
                style={{ transform: "translateZ(15px)" }}
                required
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-slate-100/80 dark:bg-black/40 text-slate-800 dark:text-gray-200
                  border border-slate-200/80 dark:border-white/10
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500/30
                  transition
                "
                style={{ transform: "translateZ(15px)" }}
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-slate-100/80 dark:bg-black/40 text-slate-800 dark:text-gray-200
                  border border-slate-200/80 dark:border-white/10
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500/30
                  transition
                "
                style={{ transform: "translateZ(15px)" }}
                required
              />

              <button
                type="submit"
                className="
                  w-full py-3 rounded-xl font-semibold text-white
                  bg-blue-600/90 border border-blue-500/50 hover:bg-blue-500
                  shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]
                  hover:-translate-y-1 transition-all duration-300 cursor-pointer
                "
                style={{ transform: "translateZ(25px)" }}
              >
                Send Message →
              </button>
            </form>
          </Card3D>
        </motion.div>

        {/* MAP & INFO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <Card3D className="
            relative p-10 rounded-3xl
            bg-white/60 dark:bg-white/5 backdrop-blur-xl
            border border-slate-200/80 dark:border-white/10
            shadow-[0_0_40px_rgba(59,130,246,0.06)] dark:shadow-[0_0_40px_rgba(59,130,246,0.15)]
            hover:border-blue-500/60
            hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_80px_rgba(59,130,246,0.45)]
            space-y-8 transition-all duration-300 cursor-default
          ">
            <div style={{ transform: "translateZ(10px)" }}>
              <p className="text-sm text-slate-500 dark:text-gray-400 font-sans">Email</p>
              <p className="text-slate-800 dark:text-white font-semibold text-lg font-display">
                anandk19570@gmail.com
              </p>
            </div>

            <div style={{ transform: "translateZ(15px)" }}>
              <p className="text-sm text-slate-500 dark:text-gray-400 font-sans">Location</p>
              <p className="text-slate-800 dark:text-white font-semibold text-lg font-display">
                Bhore, Gopalganj, Bihar, India
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10" style={{ transform: "translateZ(20px)" }}>
              <iframe
                src="https://www.google.com/maps?q=Bhore,Gopalganj,Bihar,India&output=embed"
                width="100%"
                height="260"
                loading="lazy"
              />
            </div>
          </Card3D>
        </motion.div>

      </div>
    </section>
  );
}
