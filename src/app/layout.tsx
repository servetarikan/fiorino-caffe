import "./globals.css";

export const metadata = {
  title: "Fiorino Caffè",
  description: "Authentic Italian Coffee Experience",
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