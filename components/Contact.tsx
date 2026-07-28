"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Card3D from "@/components/Card3D";
import { 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  MessageSquare, 
  User,
  ArrowRight
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lalbabusingh.dev@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong ❌ Please try emailing directly.");
      }
    } catch {
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-16 overflow-hidden bg-[#070709] text-white w-full max-w-full border-t border-white/10">
      
      {/* Background Ambient Glows */}
      <div className="absolute left-[-5%] top-[15%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-orange-600/15 blur-[170px] rounded-full pointer-events-none z-0" />
      <div className="absolute right-[-5%] bottom-[15%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-purple-900/20 blur-[170px] rounded-full pointer-events-none z-0" />

      {/* HEADING */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4 font-mono"
        >
          <Sparkles size={14} />
          <span>Connect & Collaborate</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          Get In <span className="text-orange-500">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 max-w-2xl mx-auto text-slate-300 text-sm sm:text-base font-sans"
        >
          Have a project in mind, an opportunity to discuss, or want to build an autonomous AI agent?
          Let's connect!
        </motion.p>
      </div>

      {/* MAIN TWO-COLUMN CONTENT */}
      <div className="mt-12 sm:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-10 max-w-7xl mx-auto relative z-10">

        {/* LEFT COLUMN: CONTACT DETAILS & CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Status Banner Card */}
          <Card3D className="
            p-6 rounded-3xl
            bg-slate-950/70 backdrop-blur-2xl
            border border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
            hover:border-orange-500/40 transition-all duration-300 cursor-default
          ">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400">
                Direct Contact Channel
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              Let's build something exceptional together.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Open to full-time Software Developer roles, GenAI agent contracts, and MERN stack engineering opportunities.
            </p>
          </Card3D>

          {/* Quick Info Cards */}
          <div className="space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex items-center justify-between gap-4 group hover:border-orange-500/40 transition-all">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                  <a 
                    href="mailto:lalbabusingh.dev@gmail.com"
                    className="text-xs sm:text-sm font-bold text-white hover:text-orange-400 transition-colors truncate block font-sans"
                  >
                    lalbabusingh.dev@gmail.com
                  </a>
                </div>
              </div>
              
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-slate-300 transition shrink-0 cursor-pointer"
              >
                {copiedEmail ? "Copied! ✓" : "Copy"}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex items-center gap-3.5 group hover:border-cyan-500/40 transition-all">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Primary Location</div>
                <div className="text-xs sm:text-sm font-bold text-white font-sans">
                  Delhi, India &middot; Open to Relocation / Remote
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex items-center gap-3.5 group hover:border-purple-500/40 transition-all">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Response Guarantee</div>
                <div className="text-xs sm:text-sm font-bold text-white font-sans">
                  Within 24 hours guaranteed
                </div>
              </div>
            </div>

          </div>

          {/* Social Profiles */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase">Social Channels</span>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/Lalbabu-Coder" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-orange-500/20 text-slate-300 hover:text-orange-400 border border-white/10 hover:border-orange-500/30 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: FUTURISTIC CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <Card3D className="
            relative p-6 sm:p-10 rounded-3xl
            bg-slate-950/70 backdrop-blur-2xl
            border border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
            hover:border-orange-500/40 transition-all duration-300 cursor-default
          ">
            <h3 className="text-xl sm:text-2xl font-black text-white font-display mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans mb-8">
              Fill out the form below and I will get back to you promptly.
            </p>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto font-bold">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-bold text-white font-display">Message Delivered!</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Thank you for reaching out, Lalbabu will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <User size={13} className="text-orange-400" />
                      <span>Your Name</span>
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="
                        w-full px-4 py-3 rounded-xl
                        bg-black/50 text-white placeholder:text-slate-500
                        border border-white/10
                        focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                        outline-none transition-all text-sm font-sans
                      "
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <Mail size={13} className="text-orange-400" />
                      <span>Your Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      className="
                        w-full px-4 py-3 rounded-xl
                        bg-black/50 text-white placeholder:text-slate-500
                        border border-white/10
                        focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                        outline-none transition-all text-sm font-sans
                      "
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-orange-400" />
                    <span>Subject / Project Inquiry</span>
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. GenAI Agent Project Opportunity"
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-black/50 text-white placeholder:text-slate-500
                      border border-white/10
                      focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                      outline-none transition-all text-sm font-sans
                    "
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <MessageSquare size={13} className="text-orange-400" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Briefly describe your requirements or message..."
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-black/50 text-white placeholder:text-slate-500
                      border border-white/10
                      focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                      outline-none transition-all text-sm font-sans resize-none
                    "
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full py-4 rounded-2xl font-bold text-white text-sm
                    bg-orange-500 hover:bg-orange-600 border border-orange-400/30
                    shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.55)]
                    transition-all duration-300 cursor-pointer flex items-center justify-center gap-2
                    disabled:opacity-60 disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

              </form>
            )}
          </Card3D>
        </motion.div>

      </div>
    </section>
  );
}
