import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
  title: "Lalbabu Singh | Software Developer & GenAI Engineer",
  description: "Portfolio website of Lalbabu Singh featuring GenAI agents, MERN stack, and high-performance software engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#070709] text-gray-200 antialiased relative min-h-screen selection:bg-orange-500 selection:text-white`}>
        
        {/* GLOBAL FIXED BACKGROUND PORTRAIT IMAGE OF LALBABU SINGH */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none">
          <img
            src="/hero-bg.png"
            alt="Lalbabu Singh Global Background"
            className="w-full h-full object-cover object-center filter contrast-115 brightness-60 opacity-30 md:opacity-40 scale-105"
          />
          {/* Dark Overlay Vignettes for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/70 via-[#070709]/85 to-[#070709]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,transparent_10%,#070709_90%)]" />
        </div>

        {children}
      </body>
    </html>
  );
}

