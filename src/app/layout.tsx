import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pumpuiz & Pete's Wedding",
  description: "Join us for our special day on December 05, 2025",
  keywords: "wedding, Pumpuiz, Pete, celebration, love",
  authors: [{ name: "Pumpuiz & Pete" }],
  openGraph: {
    title: "Pumpuiz & Pete's Wedding",
    description: "Join us for our special day on December 05, 2025",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
