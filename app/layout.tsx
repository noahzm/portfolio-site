import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const cardone = localFont({
  src: [
    {
      path: "./Cardone-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Cardone-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Noah Michaels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={cardone.className}>
      <body className="flex items-center justify-center min-h-dvh">
        <ThemeProvider attribute="class">
          <div className="m-4 prose">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
