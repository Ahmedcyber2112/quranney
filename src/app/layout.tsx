import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/next';
import { Cairo, Amiri_Quran } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

const amiriQuran = Amiri_Quran({
  subsets: ['arabic'],
  weight: ['400'],
  variable: '--font-amiri-quran',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'صاحب القرآن',
  description: 'تجربة فريدة ومُلهمة لحفظ ومراجعة القرآن الكريم عبر تكرار السماع للايات وحفظها من خلال تكرار الاية بصوت اكثر من شيخ.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiriQuran.variable}`}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://img.icons8.com/external-bzzricon-outline-bzzricon-studio/64/external-quran-ramadan-bzzricon-outline-bzzricon-outline-bzzricon-studio.png"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
