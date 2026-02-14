import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Vitor Villa Verde",
  description: "Vitor Villa Verde is a professional Web Developer e DevOps passionate about creating new things, this page is the current stack of knowledge he has.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>
          <MainHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
