import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { Suspense } from 'react';

const montFont = localFont({
  src: './fonts/Montserrat-VariableFont_wght.ttf',
  variable: '--font-mont',
  weight: '100 900',
});
const montItalicFont = localFont({
  src: './fonts/Montserrat-Italic-VariableFont_wght.ttf',
  variable: '--font-mont-italic',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "Ethan's Sharp Innovations Assessment",
  description: "Ethan's Sharp Innovations Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montFont.variable} ${montItalicFont.variable} body`}>
        <Suspense>
          <Header />

          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
