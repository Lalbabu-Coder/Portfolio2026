import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
  title: "Lalbabu Singh | Software Engineer – Full Stack Developer (MERN Stack)",
  description: "Software Engineer and Full Stack Developer specializing in MERN stack (MongoDB, Express.js, React.js, Node.js), scalable REST APIs, RBAC, microservices, AWS/Azure, and multi-agent AI systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#02040a] text-slate-100 antialiased relative min-h-screen selection:bg-orange-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}

