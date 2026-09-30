import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Lalbabu Singh | Software Developer – Full Stack MERN & AI Systems",
  description: "Software Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), scalable REST APIs, microservices, and multi-agent AI systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} font-sans bg-[#1d212c] text-slate-100 antialiased relative min-h-screen selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
