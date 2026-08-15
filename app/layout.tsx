import type { Metadata } from "next";
import NoteProvider from "@/context/NoteContext";
import Navbar from "@/components/Navbar"
import "./globals.css";


export const metadata: Metadata = {
  title: "Note App",
  description: "Simple Note Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NoteProvider>
          <Navbar/>
          {children}
        </NoteProvider>
      </body>
    </html>
  );
}
