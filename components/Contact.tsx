"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone,
  Send, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  MessageSquare, 
  User,
  ArrowRight,
  Code2,
  Copy,
  Check
} from "lucide-react";

export default function Contact({ onPortalTrigger }: { onPortalTrigger?: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage(null);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lalbabusingh.dev@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        onPortalTrigger?.();
        setTimeout(() => setSubmitted(false), 7000);
      } else {
        setErrorMessage(data.error || "Unable to send message. Please email directly to lalbabusingh.dev@gmail.com");
      }
    } catch {
      setErrorMessage("Network error sending message. Please try emailing directly to lalbabusingh.dev@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-16 overflow-hidden bg-transparent text-white w-full max-w-full border-t border-white/10"
    >
      {/* SECTION HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-4"
        >
          <Sparkles size={14} />
          <span>Cinematic Transmission Channel</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight font-display tracking-tight"
        >
          LET'S BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">SOMETHING GREAT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base font-sans"
        >
          Open to full-time Software Engineer & MERN roles, scalable microservices, and autonomous AI system projects.
        </motion.p>
      </div>

      {/* MAIN TWO-COLUMN CONTENT */}
      <div className="mt-14 sm:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-10 max-w-7xl mx-auto relative z-10">
        
        {/* LEFT COLUMN: CONTACT DETAILS & PORTALS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Main Status HUD */}
          <div className="p-7 rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                DIRECT COMMUNICATION CHANNEL
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              Lalbabu Singh
            </h3>
            <p className="text-xs sm:text-sm text-orange-400 font-mono font-semibold">
              Software Engineer &middot; Full Stack Developer
            </p>

            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Available for immediate hiring, freelance architecture consulting, and innovative developer projects.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="space-y-3.5">
            
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex items-center justify-between gap-4 group hover:border-orange-500/40 transition-all">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                  <a
                    href="mailto:lalbabusingh.dev@gmail.com"
                    className="text-xs sm:text-sm font-bold text-white hover:text-orange-400 transition-colors truncate block font-mono"
                  >
                    lalbabusingh.dev@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-slate-300 transition shrink-0 cursor-pointer flex items-center gap-1"
              >
                {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex items-center gap-3.5 group hover:border-emerald-500/40 transition-all">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                <a
                  href="tel:+919113382362"
                  className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                >
                  +91-9113382362
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex items-center gap-3.5 group hover:border-cyan-500/40 transition-all">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Location</div>
                <div className="text-xs sm:text-sm font-bold text-white font-sans">
                  Bengaluru, India &middot; Open to Relocation / Remote
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex items-center gap-3.5 group hover:border-purple-500/40 transition-all">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Response SLA</div>
                <div className="text-xs sm:text-sm font-bold text-white font-sans">
                  Guaranteed response within 24 hours
                </div>
              </div>
            </div>

          </div>

          {/* Social Profiles Portal */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase">Portals & Codespaces</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Lalbabu-Coder"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-orange-500/20 text-slate-300 hover:text-orange-400 border border-white/10 hover:border-orange-500/30 transition-all"
                title="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/lalbabu-singh-b39308277/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://leetcode.com/u/lalbabu/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 border border-white/10 hover:border-amber-500/30 transition-all font-mono text-xs font-bold"
                title="LeetCode"
              >
                <Code2 size={17} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: DIRECT TRANSMISSION FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="relative p-6 sm:p-9 rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]">
            <h3 className="text-xl sm:text-2xl font-black text-white font-display mb-1">
              Send a Direct Transmission
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans mb-7">
              Fill out the message fields below and I will respond promptly.
            </p>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs sm:text-sm flex items-start gap-3">
                <div className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5">⚠️</div>
                <div className="flex-1">
                  <p className="font-semibold text-white">Transmission Notice</p>
                  <p className="mt-0.5 text-red-300/90 leading-relaxed">{errorMessage}</p>
                </div>
              </div>
            )}

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto font-bold shadow-lg">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-bold text-white font-display">Transmission Delivered!</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Thank you for reaching out, Lalbabu will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
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
                      className="w-full px-4 py-3 rounded-xl bg-black/60 text-white placeholder:text-slate-500 border border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-xs sm:text-sm font-sans"
                      required
                    />
                  </div>

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
                      className="w-full px-4 py-3 rounded-xl bg-black/60 text-white placeholder:text-slate-500 border border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-xs sm:text-sm font-sans"
                      required
                    />
                  </div>
                </div>

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
                    className="w-full px-4 py-3 rounded-xl bg-black/60 text-white placeholder:text-slate-500 border border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-xs sm:text-sm font-sans"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <MessageSquare size={13} className="text-orange-400" />
                    <span>Message Content</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your requirements or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 text-white placeholder:text-slate-500 border border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-xs sm:text-sm font-sans resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-bold text-white text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:brightness-110 shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
