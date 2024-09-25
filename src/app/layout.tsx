import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import localFont from "next/font/local";
import "./globals.css";

const caprismo = localFont({
  src: "./fonts/CaprasimoRegular.ttf",
  variable: "--font-caprismo",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Verbify",
  description: "Your best English app",
  authors: [{ name: "EnneCode" }],
  openGraph: {
    actors: "EnneCode",
    title: "Verbify",
    description: "Your best English app",
    images: "https://raw.githubusercontent.com/erosMariano/ennecode_verbs/refs/heads/master/public/image/verbify.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${caprismo.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
