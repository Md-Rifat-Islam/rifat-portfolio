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
  display: "swap",
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
    "Next.js Developer",
    "React Developer",
    "Machine Learning Engineer",
    "Portfolio",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "Muhammad Rifat Islam" }],
  creator: "Muhammad Rifat Islam",
  openGraph: {
    title: "Muhammad Rifat Islam | Software Engineer & AI Developer",
    description:
      "Portfolio showcasing AI, Full-Stack, and Flutter development projects",
    url: "https://your-domain.com",
    siteName: "Muhammad Rifat Islam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rifat Islam | Software Engineer & AI Developer",
    description:
      "Portfolio showcasing AI, Full-Stack, and Flutter development projects",
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white selection:bg-gradient-to-r selection:from-[#06b6d4]/30 selection:to-[#3b82f6]/30 selection:text-white antialiased`}
      >
        {/* Gradient overlay for depth */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#06b6d4]/5 via-transparent to-transparent pointer-events-none z-0"></div>

        {/* Fixed Transparent Header */}
        <Header />

        {/* Main Content with proper spacing */}
        <div className="relative z-10 pt-24 xl:pt-28 min-h-screen">
          {/* Page Transitions */}
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </div>

        {/* Optional: Scroll to top button could go here */}
        
        {/* Background decorative elements */}
        <div className="fixed bottom-0 left-0 w-96 h-96 bg-[#06b6d4]/5 rounded-full filter blur-3xl pointer-events-none -z-10"></div>
        <div className="fixed top-1/2 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full filter blur-3xl pointer-events-none -z-10"></div>
      </body>
    </html>
  );
}