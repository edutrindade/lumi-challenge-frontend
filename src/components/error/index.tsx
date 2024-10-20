'use client';
import { useSidebar } from '@/context/sidebarContext';
import { Header } from '../header';

export function ErrorComponent() {
    const { isMenuOpen } = useSidebar();

    return (
        <main className={`p-4 transition-all duration-300 ${isMenuOpen ? 'sm:ml-48 ml-0' : 'ml-0 sm:ml-16'}`}>
            <Header title='Dashboard' filter />
            <div className='flex h-[600px] flex-col items-center justify-center'>
                <p className='text-red-500 text-md'>
                    Estamos com problemas para exibir essa página! Nosso time já foi notificado e está trabalhando para resolver.
                </p>
                <p className='text-red-500 text-md'>Lamentamos o ocorrido. Tente novamente mais tarde.</p>
            </div>
        </main>
    );
}
