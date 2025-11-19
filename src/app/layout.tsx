import ChatButton from "../Components/ChatButton";
import Navbar from "../Components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>M-KNOWS</title>
        <link rel="icon" href="/logos/logo-Mknows.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        {children}
        <ChatButton />
      </body>
    </html>
  );
}
