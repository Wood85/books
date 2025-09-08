import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@shared/fonts/montserrat";
import { VersionSaver } from "@shared/components/VersionSaver";

export const metadata: Metadata = {
  title: "Books",
  description: "Book viewer app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <VersionSaver />
        {children}
      </body>
    </html>
  );
}
