import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import Provider from '@/utils/providers';
import './globals.css';

import { Sidebar } from '@/components/sidebar';
import { SidebarProvider } from '@/context/sidebarContext';
import { DashboardProvider } from '@/context/dashboardContext';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Lumi Challenge',
    description: 'Dashboard para o desafio da Lumi',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${cn('min-h-screeen', 'font-sans', 'text-foreground', 'bg-gray-100', 'antialiased')}`}
            >
                <Provider>
                    <SidebarProvider>
                        <DashboardProvider>
                            <Sidebar />
                            {children}
                        </DashboardProvider>
                    </SidebarProvider>
                </Provider>
            </body>
        </html>
    );
}
