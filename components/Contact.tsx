"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone,
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  MessageSquare, 
  User,
  Copy,
  Check,
  Code2
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
        setTimeout(() => setSubmitted(false), 7000);
      } else {
        setErrorMessage(data.error || "Unable to send message. Please email directly to lalbabusingh.dev@gmail.com");
      }
    } catch {
      setErrorMessage("Network error. Please feel free to email directly to lalbabusingh.dev@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 sm:px-10 bg-[#14171f] text-white border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
            <span className="text-blue-500 font-extrabold text-sm">/</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-display tracking-tight">
            Let’s Build Something Great Together
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Open to full-time Software Developer roles, full-stack MERN opportunities, and innovative AI engineering projects.
          </p>
        </div>

        {/* TWO-COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3.5">
              
              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#1a1e28] border border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <a
                      href="mailto:lalbabusingh.dev@gmail.com"
                      className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors truncate block font-mono"
                    >
                      lalbabusingh.dev@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 transition shrink-0 cursor-pointer flex items-center gap-1"
                >
                  {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-2xl bg-[#1a1e28] border border-white/5 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                  <a
                    href="tel:+919113382362"
                    className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors font-mono"
                  >
                    +91-9113382362
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-[#1a1e28] border border-white/5 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-sans">
                    Bengaluru, India (Open to Relocation / Remote)
                  </div>
                </div>
              </div>

            </div>

            {/* Social Channels */}
            <div className="p-5 rounded-2xl bg-[#1a1e28] border border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase">Follow Me</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Lalbabu-Coder"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition"
                  title="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lalbabu-singh-b39308277/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 text-slate-300 hover:text-blue-400 hover:bg-white/10 transition"
                  title="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href="https://leetcode.com/u/lalbabu/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 text-slate-300 hover:text-amber-400 hover:bg-white/10 transition"
                  title="LeetCode"
                >
                  <Code2 size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1a1e28] border border-white/5">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans mb-6">
                Have a project or job opening? Leave a message below and I will get back to you promptly.
              </p>

              {errorMessage && (
                <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs sm:text-sm">
                  {errorMessage}
                </div>
              )}

              {submitted ? (
                <div className="p-8 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto font-bold">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Thank you for reaching out. I will respond to your email as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                        <User size={13} className="text-blue-400" />
                        <span>Your Name</span>
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#14171f] text-white placeholder:text-slate-500 border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-xs sm:text-sm font-sans"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                        <Mail size={13} className="text-blue-400" />
                        <span>Your Email</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#14171f] text-white placeholder:text-slate-500 border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-xs sm:text-sm font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject</label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Developer Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-[#14171f] text-white placeholder:text-slate-500 border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-xs sm:text-sm font-sans"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <MessageSquare size={13} className="text-blue-400" />
                      <span>Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Hi Lalbabu, we would love to discuss a developer opportunity with you..."
                      className="w-full px-4 py-3 rounded-xl bg-[#14171f] text-white placeholder:text-slate-500 border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-xs sm:text-sm font-sans resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-bold text-white text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
