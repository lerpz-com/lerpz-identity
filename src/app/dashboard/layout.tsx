import { auth } from '@lerpz/auth';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const data = await auth()

    return (
        <>{children}</>
    );
}
