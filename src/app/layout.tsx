import './globals.css';
import { Inter } from 'next/font/google';
import ClientLayout from './client-layout';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
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
    <html lang="tr" className={`${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/Portfolio/code-icon.svg" />
        <link rel="apple-touch-icon" href="/Portfolio/code-icon.svg" />
        <link rel="manifest" href="/Portfolio/manifest.json" />
      </head>
      <body className="font-sans">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
