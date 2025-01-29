import React from 'react';
import './globals.css';

export const metadata = {
  title: 'My Memento',
  description: 'Quick text analysis using modern psychology and the latest in AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'bg-gray-800 font-abel text-white'}>{children}</body>
    </html>
  );
}
