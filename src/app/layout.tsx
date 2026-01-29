import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const font_poppins = Poppins({
  fallback: ['arial'],
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "on track",
  description: "see your goals' achievement on calendar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "antialiased",
          font_poppins.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
