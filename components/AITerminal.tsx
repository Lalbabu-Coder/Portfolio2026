"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Shield, Play, HelpCircle } from "lucide-react";

interface LogLine {
  text: string;
  type: "input" | "output" | "system" | "error";
  timestamp: string;
}

const getTimestamp = () => {
  const now = new Date();
  return now.toTimeString().split(" ")[0];
};

export default function AITerminal() {
  const [inputVal, setInputVal] = useState("");
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<LogLine[]>([]);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const time = getTimestamp();
    setLogs([
      { text: "Initializing Lalbabu-Agent Core [v1.0.4]...", type: "system", timestamp: time },
      { text: "System diagnosis: 100% operational.", type: "system", timestamp: time },
      { text: "Welcome. Type 'help' or select a shortcut below to execute commands.", type: "output", timestamp: time },
    ]);
  }, []);

  useEffect(() => {
    if (mounted) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, mounted]);

  const handleCommand = (command: string) => {
    const trimmedCmd = command.trim().toLowerCase();
    if (!trimmedCmd) return;

    // Add user command to log
    const userLog: LogLine = {
      text: `> ${command}`,
      type: "input",
      timestamp: getTimestamp(),
    };

    let replyLogs: LogLine[] = [];

    switch (trimmedCmd) {
      case "help":
      case "/help":
        replyLogs = [
          { text: "Available Core Telemetries:", type: "system", timestamp: getTimestamp() },
          { text: "  about    - Fetch professional background and education summary.", type: "output", timestamp: getTimestamp() },
          { text: "  skills   - Pull verified programming languages, frameworks & DBs.", type: "output", timestamp: getTimestamp() },
          { text: "  projects - Query active repositories, MERN & autonomous AI platform.", type: "output", timestamp: getTimestamp() },
          { text: "  contact  - Retrieve phone, email, location metadata.", type: "output", timestamp: getTimestamp() },
          { text: "  clear    - Flush terminal console lines.", type: "output", timestamp: getTimestamp() },
        ];
        break;
      case "about":
      case "/about":
        replyLogs = [
          { text: "Retrieving 'Lalbabu Singh' profile...", type: "system", timestamp: getTimestamp() },
          { text: "Role: Software Engineer Intern (MERN Stack) @ Graphura India Pvt Ltd.", type: "output", timestamp: getTimestamp() },
          { text: "Education: B.Tech CSE Student (Gurugram University, 2023-2026).", type: "output", timestamp: getTimestamp() },
          { text: "Diploma: Computer Science Engineering (GP Hisar, 2020-2023).", type: "output", timestamp: getTimestamp() },
          { text: "Status: Specialized in API design, Docker scaling, and MongoDB indexing.", type: "output", timestamp: getTimestamp() },
        ];
        break;
      case "skills":
      case "/skills":
        replyLogs = [
          { text: "Connecting to Skill Database...", type: "system", timestamp: getTimestamp() },
          { text: "Languages: JavaScript (ES6+), Python", type: "output", timestamp: getTimestamp() },
          { text: "Frontend : React.js, Next.js, Redux Toolkit, Framer Motion, Tailwind CSS", type: "output", timestamp: getTimestamp() },
          { text: "Backend  : Node.js, Express.js, RESTful APIs, JWT Auth, RBAC permissions", type: "output", timestamp: getTimestamp() },
          { text: "Databases: MongoDB Atlas, Mongoose, MySQL, normalizations", type: "output", timestamp: getTimestamp() },
          { text: "DevOps   : Docker containerization, Git, GitHub Actions, Vercel", type: "output", timestamp: getTimestamp() },
        ];
        break;
      case "projects":
      case "/projects":
        replyLogs = [
          { text: "Parsing active deployments...", type: "system", timestamp: getTimestamp() },
          { text: "[01] Multi-AI Agent Platform (React, LangChain, OpenAI, Docker, Microservices)", type: "output", timestamp: getTimestamp() },
          { text: "     - Orchestrates autonomous agents for conversation support & workflow automation.", type: "output", timestamp: getTimestamp() },
          { text: "[02] Task Management System (React, Node.js, REST APIs, Context API, Tailwind)", type: "output", timestamp: getTimestamp() },
          { text: "     - Role-based dashboard (Admin, Team Leader, Employee) tracking deadlines.", type: "output", timestamp: getTimestamp() },
          { text: "[03] VR & Sons E-Commerce (React, Next.js, Tailwind) - Import-Export business catalogue.", type: "output", timestamp: getTimestamp() },
        ];
        break;
      case "contact":
      case "/contact":
        replyLogs = [
          { text: "Loading developer credentials...", type: "system", timestamp: getTimestamp() },
          { text: "Email    : lalbabusingh.dev@gmail.com", type: "output", timestamp: getTimestamp() },
          { text: "Phone    : +91 9113382362", type: "output", timestamp: getTimestamp() },
          { text: "Location : Delhi, India", type: "output", timestamp: getTimestamp() },
          { text: "GitHub   : github.com/Lalbabu-Coder", type: "output", timestamp: getTimestamp() },
        ];
        break;
      case "clear":
      case "/clear":
        setLogs([]);
        setInputVal("");
        return;
      default:
        replyLogs = [
          { text: `Command '${command}' not recognized.`, type: "error", timestamp: getTimestamp() },
          { text: "Type 'help' to review available terminal options.", type: "system", timestamp: getTimestamp() },
        ];
        break;
    }

    setLogs((prev) => [...prev, userLog, ...replyLogs]);
    setInputVal("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-blue-500/20 bg-slate-950/80 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden font-mono text-xs md:text-sm text-green-400">
      
      {/* WINDOW BAR */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-blue-500/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold select-none">
          <Terminal size={14} className="text-blue-500" />
          <span>lalbabu-ai-terminal.sh</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-500">
          <Shield size={12} className="text-cyan-500" />
          <span>SECURE</span>
        </div>
      </div>

      {/* LOGS DISPLAY */}
      <div className="h-[280px] md:h-[320px] p-4 overflow-y-auto space-y-2 bg-[#020617]/95 scrollbar-thin scrollbar-thumb-slate-800">
        {mounted && logs.map((log, i) => (
          <div key={i} className="leading-relaxed flex items-start gap-2">
            <span className="text-[10px] text-slate-600 select-none mt-0.5">[{log.timestamp}]</span>
            <span
              className={
                log.type === "input"
                  ? "text-cyan-400 font-bold"
                  : log.type === "system"
                  ? "text-blue-400 font-medium"
                  : log.type === "error"
                  ? "text-rose-400 font-bold"
                  : "text-emerald-400"
              }
            >
              {log.text}
            </span>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* QUICK COMMAND SHORTCUTS */}
      <div className="p-3 bg-slate-950 border-t border-blue-500/10 flex flex-wrap gap-2 items-center">
        <span className="text-[10px] text-slate-500 uppercase font-bold mr-1">Shortcuts:</span>
        {["about", "skills", "projects", "contact", "clear"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-3 py-1 rounded bg-slate-900 border border-blue-500/10 hover:border-cyan-500/40 text-cyan-400 hover:text-white transition-all text-xs font-semibold cursor-pointer flex items-center gap-1 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          >
            <Play size={10} className="shrink-0" />
            /{cmd}
          </button>
        ))}
      </div>

      {/* CLI INPUT FIELD */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#020617] border-t border-blue-500/10">
        <span className="text-cyan-400 font-bold select-none">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="type command (e.g. 'help', 'about', 'skills')..."
          className="flex-grow bg-transparent text-white focus:outline-none border-none caret-cyan-400 text-xs md:text-sm"
        />
        <button
          onClick={() => handleCommand(inputVal)}
          className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition duration-200 cursor-pointer"
        >
          EXECUTE
        </button>
      </div>

    </div>
  );
}
