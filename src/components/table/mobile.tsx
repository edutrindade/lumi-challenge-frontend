import React from 'react';
import { FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Month {
    available: boolean;
    document: string;
}

interface RowData {
    name: string;
    clientNumber: string;
    installationNumber: string;
    distributor: string;
    months: Month[];
}

interface DataTableProps {
    filteredData: RowData[];
}

const DataTableMobile = ({ filteredData }: DataTableProps) => {
    const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

    return (
        <div className='flex flex-col gap-4'>
            {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                    <Card className='p-6 rounded-lg shadow-lg bg-white border border-gray-300'>
                        <p className='text-sm font-bold text-green-800 mb-2'>{row.name.toUpperCase()}</p>
                        <div className='flex justify-between items-center mb-4'>
                            <p className='text-sm text-gray-700'>
                                Nº do Cliente: <span className='font-semibold'>{row.clientNumber}</span>
                            </p>
                            <p className='text-sm text-gray-700'>
                                Nº da Instalação: <span className='font-semibold'>{row.installationNumber}</span>
                            </p>

                            <span className='text-sm font-bold text-white border bg-green-700 rounded px-2 py-1'>{row.distributor}</span>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-lg font-semibold text-gray-800'>Faturas</h3>
                            {MONTHS.map((month, i) => {
                                const monthData = row.months.find((m: any) => m.month === month);
                                return (
                                    <div key={i} className='flex items-center justify-between my-2 border-b border-gray-200 pb-2'>
                                        <span className='text-sm'>{month}</span>
                                        {monthData && monthData.available ? (
                                            <FileText
                                                className='w-6 h-6 text-green-500 cursor-pointer hover:text-green-700'
                                                onClick={() => window.open(monthData.document, '_blank')}
                                            />
                                        ) : (
                                            <FileText className='w-6 h-6 text-gray-400' />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </Card>
                ))
            ) : (
                <div className='text-center text-gray-500'>Nenhum registro encontrado</div>
            )}
        </div>
    );
};

export default DataTableMobile;
