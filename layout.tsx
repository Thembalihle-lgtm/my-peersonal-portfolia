import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thembalihle Ngubane | Portfolio",
  description:
    "Professional portfolio of Thembalihle Ngubane, a Financial Management graduate building skills in software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
