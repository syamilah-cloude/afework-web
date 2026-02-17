import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afework Moments",
  description: "Premium fashion for all-day comfort",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
