import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import './globals.scss';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Solutioneers Infotech',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
