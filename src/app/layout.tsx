import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import R2GScene from "@/app/three/r2gscene";

export const metadata: Metadata = {
  title: "Robert Gracia",
  description: "My Developer Portfolio/Resume Site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>
          <R2GScene/>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
