import "@/app/globals.css";
import NAVIGATION from '@/navigation';
import theme from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { ThemeProvider } from '@mui/material/styles';
import { Authentication, Branding } from '@toolpad/core';
import { NextAppProvider } from '@toolpad/core/nextjs';
import type { Metadata } from "next";
import { SessionProvider, signIn, signOut } from 'next-auth/react';
import { Fira_Mono, Poppins } from "next/font/google";
import * as React from 'react';

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Lerpz - Identity",
  description: "A platform for managing identities in Lerpz.",
};

const BRANDING: Branding = {
  logo: <img src="/Lerpz@512x512.webp" alt="Lerpz logo" />,
  title: 'Lerpz',
  homeUrl: '/dashboard',
}

const AUTHENTICATION: Authentication = {
  signIn,
  signOut,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${firaMono.variable} antialiased`}>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <NextAppProvider
              branding={BRANDING}
              navigation={NAVIGATION}
              authentication={AUTHENTICATION}
              theme={theme}
            >
              <SessionProvider>
                {children}
              </SessionProvider>
            </NextAppProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
