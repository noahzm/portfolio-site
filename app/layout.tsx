import "./globals.css";
import React from "react";

export const metadata = {
  title: "Noah Michaels",
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
