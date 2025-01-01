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
  icons: {
    icon: '/android-icon.svg',
    shortcut: '/android-icon.svg',
    apple: '/android-icon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/android-icon.svg',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${poppins.variable}`}>
      <head>
        <link rel="icon" href="/android-icon.svg" type="image/svg+xml" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
