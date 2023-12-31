import './globals.css';
import { inter } from './_core/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | R-Cloud',
    default: 'R-Cloud',
  },
  description: 'could storage service app',
  metadataBase: new URL('http://localhost:3000'),
  keywords: ['r-cloud', 'r cloud', 'could', 'service', 'storage', 'google-drive', 'Roger', 'Rash', 'R'],
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    description: 'r-cloud rainkicker web application',
    siteName: 'R-cloud',
    title: 'R-cloud Web Page',
  },
};

interface Props {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <head>
        <meta name='theme-color' content='#5588ff' />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
