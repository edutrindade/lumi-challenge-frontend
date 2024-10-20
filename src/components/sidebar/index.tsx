'use client';
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
                        <span className='sr-only'>Logo</span>
                    </Link>

                    <div className='mt-4 gap-4 flex flex-col px-4'>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href='#' className='flex items-center gap-4 text-muted-foreground hover:text-green-300 text-white'>
                                        <LayoutDashboard className='w-5 h-5' />
                                        {isMenuOpen && <span className='text-sm font-semibold'>Dashboard</span>}
                                    </Link>
                                </TooltipTrigger>
                                {!isMenuOpen && (
                                    <TooltipContent side='right'>
                                        <span className='text-xs font-semibold text-gray-700'>Dashboard</span>
                                    </TooltipContent>
                                )}
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href='#' className='flex items-center gap-4 text-muted-foreground hover:text-green-300 text-white'>
                                        <FileText className='w-5 h-5' />
                                        {isMenuOpen && <span className='text-sm font-semibold'>Faturas</span>}
                                    </Link>
                                </TooltipTrigger>
                                {!isMenuOpen && (
                                    <TooltipContent side='right'>
                                        <span className='text-xs font-semibold text-gray-700'>Faturas</span>
                                    </TooltipContent>
                                )}
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href='#' className='flex items-center gap-4 text-muted-foreground hover:text-green-300 text-white'>
                                        <Settings2 className='w-5 h-5' />
                                        {isMenuOpen && <span className='text-sm font-semibold'>Configurações</span>}
                                    </Link>
                                </TooltipTrigger>
                                {!isMenuOpen && (
                                    <TooltipContent side='right'>
                                        <span className='text-xs font-semibold text-gray-700'>Configurações</span>
                                    </TooltipContent>
                                )}
                            </Tooltip>
                        </TooltipProvider>
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
                            <TooltipContent side='top'>
                                <span className='text-xs font-semibold text-gray-700'>{isMenuOpen ? 'Recolher' : 'Expandir'}</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <div className='sm:hidden flex w-full flex-col bg-[#02231C]'>
                <div className='flex flex-col sm:gap-4 sm:pl-14'>
                    <header className='sticky top-0 z-30 flex h-14 items-center px-4 border-b border-[#02231C] bg-[#02231C] gap-4 sm:static sm:h-auto sm:border-0 sm:bg-[#02231C] sm:px-6'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size='icon' variant='outline' className='sm:hidden text-white bg-transparent'>
                                    <PanelBottom className='w-5 h-5' />
                                    <span className='sr-only'>Abrir / fechar menu</span>
                                </Button>
                            </SheetTrigger>

                            <SheetContent side='left' className='sm:max-w-xs bg-[#02231C] text-white'>
                                <nav className='grid gap-6 text-lg font-medium'>
                                    <Link href='https://www.labs-lumi.com.br/' prefetch={false} target='_blank' rel='noopener noreferrer'>
                                        <Image src={LumiLogo} alt='Lumi Logo' className={'max-w-full h-auto px-4 transition-opacity duration-300'} />
                                        <span className='sr-only'>Logo</span>
                                    </Link>

                                    <Link
                                        href='#'
                                        className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-green-300 text-white'
                                        prefetch={false}
                                    >
                                        <LayoutDashboard className='w-5 h-5 transition-all' />
                                        Dashboard
                                    </Link>

                                    <Link
                                        href='#'
                                        className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-green-300 text-white'
                                        prefetch={false}
                                    >
                                        <FileText className='w-5 h-5 transition-all' />
                                        Faturas
                                    </Link>

                                    <Link
                                        href='#'
                                        className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-green-300 text-white'
                                        prefetch={false}
                                    >
                                        <Settings2 className='w-5 h-5 transition-all' />
                                        Configurações
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>

                        <h2 className='text-lg font-semibold text-white'>Menu</h2>
                    </header>
                </div>
            </div>
        </div>
    );
};
