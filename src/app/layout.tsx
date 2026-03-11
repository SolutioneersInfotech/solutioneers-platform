import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Solutioneers Infotech",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <div className="scroll-container">

            <main>
              {children}
            </main>

            <Footer />

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}