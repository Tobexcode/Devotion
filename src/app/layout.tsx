import "./globals.css";

export const metadata = {
  title: "Tolu Aina",
  description: "Exploring passions, pursuing ambitions, creating my path",
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
