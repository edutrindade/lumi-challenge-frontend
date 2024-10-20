'use client';
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CardComponentProps {
    title: string;
    description: string;
    value: string | number;
    unit?: string;
    icon: ReactNode;
}

export const CardComponent = ({ title, description, value, unit, icon }: CardComponentProps) => {
    return (
        <Card className='shadow-md border-transparent'>
            <CardHeader>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col justify-center'>
                        <CardTitle className='text-lg sm:text-xl text-gray-700 select-none'>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                    <div className='ml-4 w-10 h-10 text-green-800 flex items-center justify-center'>{icon}</div>
                </div>
            </CardHeader>

            <CardContent>
                <p className='text-base sm:text-2xl font-bold text-green-800'>
                    {value}
                    {unit && <span className='sm:text-xs font-semibold text-gray-500'> {unit}</span>}
                </p>
            </CardContent>
        </Card>
    );
};
