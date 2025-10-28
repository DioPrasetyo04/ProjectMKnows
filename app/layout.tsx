import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>M-Knows</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
