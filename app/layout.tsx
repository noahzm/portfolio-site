import "./globals.css";
import React from "react";

export const metadata = {
  title: "Noah Michaels",
  description:
    "Noah Michaels, a Raleigh-based graphic designer specializing in print production and page layout. Currently a print specialist for the NC General Assembly, with expertise in impactful, professional design solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex items-center justify-center min-h-dvh">
        <div className="m-4 prose">{children}</div>
      </body>
    </html>
  );
}
