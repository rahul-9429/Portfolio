import './globals.css';

import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import RootProviders from './root-providers';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Santhosh Rahul',
    template: '%s | Full-Stack Software Engineer',
  },
  description:
    'Santhosh Rahul is a full-stack software engineer specializing in Next.js, TypeScript, and scalable web systems, open to full-time opportunities in the UAE, India, and remote.',
  keywords:
    'Santhosh Rahul, Full Stack Developer, Software Engineer, Next.js Developer, React Developer, TypeScript, Web Developer UAE, Software Engineer Dubai, Software Engineer Abu Dhabi, Software Developer UAE, Open to Relocate, Remote Software Engineer, India.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={GeistSans.className} suppressHydrationWarning>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
