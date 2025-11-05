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
        <title>M-Knows</title>
      </head>
      <body className="min-h-screen">
        <Navbar />
        {children}
        <ChatButton />
      </body>
    </html>
  );
}
