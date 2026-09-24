import './globals.css';
import { Poppins } from 'next/font/google';
import ClientLayout from './client-layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Eren Mollaoğlu - Software Developer',
  description: 'Kripto platformunda backend geliştiriyorum; mobil ve web tarafında da uçtan uca ürün çıkarıyorum.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/Portfolio/code-icon.svg" />
        <link rel="alternate icon" href="/Portfolio/favicon.ico" />
        <link rel="apple-touch-icon" href="/Portfolio/code-icon.svg" />
        <link rel="manifest" href="/Portfolio/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-sans">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
