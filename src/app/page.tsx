'use client';
import { useSidebar } from '@/context/sidebarContext';

export default function Dashboard() {
    const { isMenuOpen } = useSidebar();

    return (
        <main className={`p-4 transition-all duration-300 ${isMenuOpen ? 'ml-48' : 'ml-16'}`}>
            <h1>Dashboard</h1>
        </main>
    );
}
