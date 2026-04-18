"use client";
import { motion } from "framer-motion";
import { useState } from "react";

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
          bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600
          bg-clip-text text-transparent
          drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]
        "
      >
        Get In Touch
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-center text-gray-300">
        Have a project in mind or want to discuss opportunities?
        I’d love to hear from you.
      </p>

      {/* TWO CARDS */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

        {/* SEND MESSAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -14, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            relative p-10 rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_40px_rgba(59,130,246,0.15)]
            hover:border-blue-500/60
            hover:shadow-[0_0_80px_rgba(59,130,246,0.45)]
          "
        >
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-8 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/40 text-gray-200
                border border-white/10
                focus:border-blue-500
                focus:ring-2 focus:ring-blue-500/30
                transition
              "
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
                bg-black/40 text-gray-200
                border border-white/10
                focus:border-blue-500
                focus:ring-2 focus:ring-blue-500/30
                transition
              "
              required
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/40 text-gray-200
                border border-white/10
                focus:border-blue-500
                focus:ring-2 focus:ring-blue-500/30
                transition
              "
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
                bg-black/40 text-gray-200
                border border-white/10
                focus:border-blue-500
                focus:ring-2 focus:ring-blue-500/30
                transition
              "
              required
            />

            <button
              type="submit"
              className="
                w-full py-3 rounded-xl font-semibold text-white
                bg-blue-600/90 border border-blue-500/50 hover:bg-blue-500
                shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]
                hover:-translate-y-1 transition-all duration-300 cursor-pointer
              "
            >
              Send Message →
            </button>
          </form>
        </motion.div>

        {/* MAP & INFO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -14, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            relative p-10 rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_40px_rgba(59,130,246,0.15)]
            hover:border-blue-500/60
            hover:shadow-[0_0_80px_rgba(59,130,246,0.45)]
            space-y-8
          "
        >
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-white font-semibold text-lg">
              anandk19570@gmail.com
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="text-white font-semibold text-lg">
              Bhore, Gopalganj, Bihar, India
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Bhore,Gopalganj,Bihar,India&output=embed"
              width="100%"
              height="260"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
