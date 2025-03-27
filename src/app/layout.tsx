import "@lerpz/app/globals.css";
import theme from '@lerpz/theme';
import { MantineProvider } from '@mantine/core';
import type { Metadata } from "next";
import { SessionProvider } from 'next-auth/react';
import { Fira_Mono, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const firaMono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Lerpz - Identity",
  description: "A platform for managing identities in Lerpz.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MantineProvider theme={theme}>
          <SessionProvider>
            {children}
          </SessionProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
