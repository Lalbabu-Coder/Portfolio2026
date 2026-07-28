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
        
        {/* Subtle Ambient Background Mesh */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none bg-[#070709]" />

        {children}
      </body>
    </html>
  );
}

