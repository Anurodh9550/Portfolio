import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
import ScrollProgress from "@/components/scroll-progress";
import AnimatedBackground from "@/components/animated-background";
import { PointerProvider } from "@/components/tilt-words";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anurodh Kumar — Python Full Stack Developer",
  description:
    "Portfolio of Anurodh Kumar — Computer Science engineering student & Python Full Stack Developer building scalable web apps with Django, React, and Machine Learning.",
  keywords: [
    "Anurodh Kumar",
    "Portfolio",
    "Python Developer",
    "Django Developer",
    "Full Stack Developer",
    "React",
    "Machine Learning",
    "Delhi",
  ],
  authors: [{ name: "Anurodh Kumar" }],
  openGraph: {
    title: "Anurodh Kumar — Python Full Stack Developer",
    description:
      "Python Full Stack Developer · Django · React · Machine Learning · Delhi, India.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} ${display.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PointerProvider>
            <AnimatedBackground />
            <ScrollProgress />
            <CustomCursor />
            {children}
          </PointerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
