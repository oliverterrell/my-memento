import { AppProvider } from '@/lib/AppProvider';
import React from 'react';
import './globals.css';

export const metadata = {
  title: 'My Memento',
  description: 'Quick text analysis using modern psychology and the latest in AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'font-abel bg-gray-800 text-white'}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
