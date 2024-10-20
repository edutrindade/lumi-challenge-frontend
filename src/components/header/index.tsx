'use client';
import { useState } from 'react';
import { Bell, Filter, Mail, User } from 'lucide-react';
import { FilterComponent } from '@/components/filter';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';

interface HeaderProps {
    title: string;
    filter?: boolean;
}

export const Header = ({ title, filter = false }: HeaderProps) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const classNameButton = isFilterOpen
        ? 'text-green-500 cursor-pointer hover:text-green-900 mt-1'
        : 'text-green-900 cursor-pointer hover:text-green-500 mt-1';

    return (
        <div className='py-2 pr-4 mb-2'>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='text-xl font-semibold text-green-900'>{title}</h2>
                <div className='flex items-center gap-6'>
                    {filter && (
                        <div onClick={() => setIsFilterOpen(!isFilterOpen)}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        {isFilterOpen ? (
                                            <div className='relative flex items-center bg-gray-200 rounded-full w-10 h-10 justify-center cursor-pointer'>
                                                <Filter className={classNameButton} />
                                            </div>
                                        ) : (
                                            <div className='relative flex items-center bg-transparent rounded-full w-10 h-10 justify-center cursor-pointer'>
                                                <Filter className={classNameButton} />
                                            </div>
                                        )}
                                    </TooltipTrigger>
                                    <TooltipContent side='bottom'>
                                        <span className='text-xs font-semibold text-gray-700'>Filtros</span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    )}

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <User className='text-green-900 cursor-pointer hover:text-green-500' />
                            </TooltipTrigger>
                            <TooltipContent side='bottom'>
                                <span className='text-xs font-semibold text-gray-700'>Perfil</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Mail className='text-green-900 cursor-pointer hover:text-green-500' />
                            </TooltipTrigger>
                            <TooltipContent side='bottom'>
                                <span className='text-xs font-semibold text-gray-700'>Caixa de entrada</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <div className='relative flex items-center bg-green-900 rounded-full w-10 h-10 justify-center cursor-pointer'>
                                    <Bell className='text-white' />
                                    <span className='absolute top-[-8px] right-[-6px] bg-orange-500 text-white font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                        3
                                    </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side='bottom'>
                                <span className='text-xs font-semibold text-gray-700'>Notificações</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            {isFilterOpen && (
                <div className='flex w-full flex-row flex-grow'>
                    <FilterComponent />
                </div>
            )}
        </div>
    );
};
