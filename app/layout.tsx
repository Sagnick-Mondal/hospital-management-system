import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import * as Sentry from '@sentry/nextjs';

import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

// ✅ Use generateMetadata instead of static metadata
export function generateMetadata(): Metadata {
  return {
    title: 'Medtek-An Appointment App',
    description:
      'A modern & elegant management system for hospitals designed for both doctors and patients.',
    other: {
      ...Sentry.getTraceData(),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-gradient-to-b from-gray-200 via-green-200 to-blue-950 font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
