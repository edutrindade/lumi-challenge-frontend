import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText } from 'lucide-react';

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

const DataTable = ({ filteredData }: DataTableProps) => {
    const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

    return (
        <Table className='min-w-full table-auto border-collapse border border-gray-200'>
            <TableHeader>
                <TableRow className='bg-green-900 text-white hover:bg-green-900'>
                    <TableHead className='px-4 py-2'>Cliente</TableHead>
                    <TableHead className='px-4 py-2'>Nº do Cliente</TableHead>
                    <TableHead className='px-4 py-2'>Nº da Instalação</TableHead>
                    <TableHead className='px-4 py-2'>Distribuidora</TableHead>
                    <TableHead className='px-4 py-2'>Jan</TableHead>
                    <TableHead className='px-4 py-2'>Feb</TableHead>
                    <TableHead className='px-4 py-2'>Mar</TableHead>
                    <TableHead className='px-4 py-2'>Abr</TableHead>
                    <TableHead className='px-4 py-2'>Mai</TableHead>
                    <TableHead className='px-4 py-2'>Jun</TableHead>
                    <TableHead className='px-4 py-2'>Jul</TableHead>
                    <TableHead className='px-4 py-2'>Ago</TableHead>
                    <TableHead className='px-4 py-2'>Set</TableHead>
                    <TableHead className='px-4 py-2'>Out</TableHead>
                    <TableHead className='px-4 py-2'>Nov</TableHead>
                    <TableHead className='px-4 py-2'>Dez</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredData.map((row, index) => (
                    <TableRow key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                        <TableCell className='px-4 py-2 font-semibold text-xs'>{row.name.toUpperCase()}</TableCell>
                        <TableCell className='px-4 py-2 text-xs'>{row.clientNumber}</TableCell>
                        <TableCell className='px-4 py-2 text-xs'>{row.installationNumber}</TableCell>
                        <TableCell className='px-4 py-2 text-xs'>{row.distributor}</TableCell>
                        {MONTHS.map((month, i) => {
                            const monthData = row.months.find((m: any) => m.month === month);
                            return (
                                <TableCell key={i} className='px-4 py-2 text-center'>
                                    {monthData && monthData.available ? (
                                        <FileText
                                            className='w-5 h-5 text-green-500 cursor-pointer hover:text-green-700'
                                            onClick={() => window.open(monthData.document, '_blank')}
                                        />
                                    ) : (
                                        <FileText className='w-5 h-5 text-gray-400' />
                                    )}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                ))}
                {filteredData.length === 0 && (
                    <TableRow>
                        <TableCell colSpan={16} className='px-4 py-2 text-center'>
                            Nenhum registro encontrado
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default DataTable;
