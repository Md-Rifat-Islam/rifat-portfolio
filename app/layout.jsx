import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Font setup
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// SEO + Branding
export const metadata = {
  title: "Muhammad Rifat Islam | Software Engineer & AI Developer",
  description:
    "Portfolio of Muhammad Rifat Islam — Software Engineer specializing in Full-Stack, Flutter, and AI-driven development. Building impactful, scalable digital experiences.",
  keywords: [
    "Muhammad Rifat Islam",
    "Software Engineer",
    "AI Developer",
    "Flutter Developer",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Rifat Islam" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} bg-[#0f172a] text-white selection:bg-accent/30`}
      >
        {/* Fixed Transparent Header */}
        <Header />

        {/* Spacer for Header Height */}
        <div className="pt-24 xl:pt-28">
          {/* Page Transitions */}
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
