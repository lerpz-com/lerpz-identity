import { auth } from '@/auth';
import { DashboardLayout } from '@toolpad/core';
import { Navigation } from '@toolpad/core/AppProvider';
import { NextAppProvider } from '@toolpad/core/nextjs';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const data = await auth()

    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
}
