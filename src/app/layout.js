import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Ashwin Thamban | Portfolio & AI Assistant",
  description: "Portfolio of Ashwin Thamban, Frontend & Full-Stack Developer specializing in React, Next.js, and Node.js.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden w-full antialiased selection:bg-purple-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}