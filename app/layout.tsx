import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Next JS Application",
  description: "Next JS Application , June 2026 Batch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
