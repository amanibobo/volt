import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});


export const metadata: Metadata = {
  title: "Voltient",
  description:
    "Optimize your data center locations with advanced AI analytics for a sustainable, high-performance future.",
    openGraph: {
      images: ['/voltient-demo-comp.png'],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={plusJakarta.className}
      >
        {children}
      </body>
    </html>
  );
}
