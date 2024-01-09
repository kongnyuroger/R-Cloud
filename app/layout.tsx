import './globals.css';
import { inter } from './_core/ui/fonts';

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='theme-color' content='#5588ff' />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}