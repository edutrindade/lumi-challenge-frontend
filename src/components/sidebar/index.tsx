'use client';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard, PanelBottom, FileText, Zap, Settings2, StepBack, StepForward } from 'lucide-react';
import Image from 'next/image';

import LumiLogo from '@/assets/lumi-logo.svg';
import LumiLogoSmall from '@/assets/lumi-logo-small.png';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useSidebar } from '@/context/sidebarContext';

export const Sidebar = () => {
    const { isMenuOpen, toggleMenu } = useSidebar();

    return (
        <div className='flex w-full flex-col bg-muted/40'>
            <aside
                className={`fixed inset-y-0 left-0 z-10 border-r bg-[#02231C] sm:flex hidden flex-col rounded-tr-3xl rounded-br-3xl transition-all duration-300 ${
                    isMenuOpen ? 'w-48' : 'w-16'
                }`}
            >
                <nav className='flex flex-col gap-4 px-2 py-5'>
                    <Link href='https://www.labs-lumi.com.br/' prefetch={false} target='_blank' rel='noopener noreferrer'>
                        <Image
                            src={isMenuOpen ? LumiLogo : LumiLogoSmall}
                            alt='Lumi Logo'
                            className={
                                isMenuOpen ? `max-w-full h-auto px-4 transition-opacity duration-300` : `max-w-full h-auto transition-opacity duration-300`
                            }
                        />
                        <span className='sr-only'>Dashboard Avatar</span>
                    </Link>

                    <div className='mt-4 gap-4 flex flex-col px-4'>
                        <Link href='#' className='flex items-center gap-4 text-muted-foreground hover:text-green-300 text-white'>
                            <LayoutDashboard className='w-5 h-5' />
                            {isMenuOpen && <span>Dashboard</span>}
                        </Link>

                        <Link href='#' className='flex items-center gap-4 text-muted-foreground hover:text-green-300 text-white'>
                            <FileText className='w-5 h-5' />
                            {isMenuOpen && <span>Faturas</span>}
                        </Link>

                        <Link href='#' className='flex items-center gap-4 text-muted-foreground hover:text-green-300 text-white'>
                            <Settings2 className='w-5 h-5' />
                            {isMenuOpen && <span>Configurações</span>}
                        </Link>
                    </div>
                </nav>

                <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-5'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button
                                    onClick={toggleMenu}
                                    size='icon'
                                    variant='outline'
                                    className='flex h-9 w-9 shrink-0 rounded-full border-none items-center justify-center bg-green-900 text-white hover:bg-green-300 hover:text-green-900'
                                >
                                    {isMenuOpen ? <StepBack className='w-5 h-5' /> : <StepForward className='w-5 h-5' />}
                                    <span className='sr-only'>Abrir / fechar menu</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side='top'>{isMenuOpen ? 'Recolher' : 'Expandir'}</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <div className='sm:hidden flex w-full flex-col bg-muted/40'>
                <div className='flex flex-col sm:gap-4 sm:pl-14'>
                    <header className='sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size='icon' variant='outline' className='sm:hidden'>
                                    <PanelBottom className='w-5 h-5' />
                                    <span className='sr-only'>Abrir / fechar menu</span>
                                </Button>
                            </SheetTrigger>

                            <SheetContent side='left' className='sm:max-w-xs'>
                                <nav className='grid gap-6 text-lg font-medium'>
                                    <Link
                                        href='#'
                                        className='flex w-10 h-10 bg-green-800 rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2'
                                        prefetch={false}
                                    >
                                        <Zap className='w-5 h-5' />
                                        <span className='sr-only'>Logo</span>
                                    </Link>

                                    <Link href='#' className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' prefetch={false}>
                                        <LayoutDashboard className='w-5 h-5 transition-all' />
                                        Dashboard
                                    </Link>

                                    <Link href='#' className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' prefetch={false}>
                                        <FileText className='w-5 h-5 transition-all' />
                                        Faturas
                                    </Link>

                                    <Link href='#' className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' prefetch={false}>
                                        <Settings2 className='w-5 h-5 transition-all' />
                                        Configurações
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>

                        <h2 className='text-lg font-semibold text-muted-foreground'>Menu</h2>
                    </header>
                </div>
            </div>
        </div>
    );
};
