import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Eren Mollaoğlu - Android Developer',
  description: 'Mobil uygulama geliştirme konusunda tutkulu, yenilikçi çözümler üreten ve sürekli öğrenmeye odaklı bir yazılım geliştiricisi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/Portfolio/android-icon.svg" />
        <link rel="alternate icon" href="/Portfolio/favicon.ico" />
        <link rel="apple-touch-icon" href="/Portfolio/android-icon.svg" />
        <link rel="manifest" href="/Portfolio/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
