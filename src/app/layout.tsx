import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiorino Caffè",
  description: "Authentic Italian Coffee Experience",
  other: "<meta name="facebook-domain-verification" content="qb8wbu8knaicjxfnsobjkzxdjw75hg" />
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
