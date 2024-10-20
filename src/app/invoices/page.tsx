'use client';
import { useState } from 'react';
import { Header } from '@/components/header';
import { useSidebar } from '@/context/sidebarContext';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Calendar, FileText } from 'lucide-react';
import { Combobox } from '@/components/combobox';

export default function Invoices() {
    const { isMenuOpen } = useSidebar();

    const currentYear = new Date().getFullYear().toString();
    const years = Array.from({ length: 5 }, (_, i) => Number(currentYear) - i);

    const [selectedClient, setSelectedClient] = useState('');
    const [selectedYear, setSelectedYear] = useState<string>(currentYear);

    const data = [
        {
            id: '1',
            name: 'CASA DONA COMERCIO VAREJISTA E SOLUÇÕES LTDA',
            clientNumber: '7204076116',
            installationNumber: '300263t513',
            distributor: 'CEMIG',
            months: [
                {
                    month: 'Jan',
                    year: 2024,
                    available: true,
                    document: 'https://lumi-challenge-backend.onrender.com/invoices/3001116735-01-2024.pdf',
                },
                { month: 'Feb', year: 2024, available: true },
                { month: 'Mar', year: 2024, available: true },
                { month: 'Abr', year: 2024, available: true },
                { month: 'Mai', year: 2024, available: true },
                { month: 'Jun', year: 2024, available: true },
                { month: 'Jul', year: 2024, available: true },
                { month: 'Ago', year: 2024, available: true },
                { month: 'Set', year: 2024, available: true },
                { month: 'Out', year: 2024, available: false },
                { month: 'Nov', year: 2024, available: false },
                { month: 'Dez', year: 2024, available: false },
            ],
        },
        {
            id: '2',
            name: 'Walter Boaventura da Silva',
            clientNumber: '7204076116',
            installationNumber: '300263513',
            distributor: 'CEMIG',
            months: [
                { month: 'Jan', year: 2024, available: true },
                { month: 'Feb', year: 2024, available: true },
                { month: 'Mar', year: 2024, available: true },
                { month: 'Abr', year: 2024, available: true },
                { month: 'Mai', year: 2024, available: true },
                { month: 'Jun', year: 2024, available: true },
                { month: 'Jul', year: 2024, available: true },
                { month: 'Ago', year: 2024, available: true },
                { month: 'Set', year: 2024, available: true },
                { month: 'Out', year: 2024, available: false },
                { month: 'Nov', year: 2024, available: false },
                { month: 'Dez', year: 2024, available: false },
            ],
        },
        {
            id: '3',
            name: 'Eduardo Augusto Costa Trindade',
            clientNumber: '7204076116',
            installationNumber: '300263513',
            distributor: 'CEMIG',
            months: [
                { month: 'Jan', year: 2024, available: false },
                { month: 'Feb', year: 2024, available: false },
                { month: 'Mar', year: 2024, available: false },
                { month: 'Abr', year: 2024, available: false },
                { month: 'Mai', year: 2024, available: false },
                { month: 'Jun', year: 2024, available: false },
                { month: 'Jul', year: 2024, available: false },
                { month: 'Ago', year: 2024, available: false },
                { month: 'Set', year: 2024, available: true },
                { month: 'Out', year: 2024, available: false },
                { month: 'Nov', year: 2024, available: false },
                { month: 'Dez', year: 2024, available: false },
            ],
        },
    ];

    const filteredData = data.filter((row) => {
        const yearFilteredMonths = row.months.filter((month) => month.year.toString() === selectedYear);
        return (selectedClient === 'all' || row.name.includes(selectedClient)) && yearFilteredMonths.some((month) => month.available);
    });

    return (
        <main className={`p-4 transition-all duration-300 ${isMenuOpen ? 'sm:ml-48 ml-0' : 'ml-0 sm:ml-16'}`}>
            <Header title='Faturas' />

            <div className='flex justify-between items-center mb-4'>
                <Combobox selectedItem={selectedClient} setSelectedItem={setSelectedClient} data={data} label='cliente' />

                <Select onValueChange={setSelectedYear} defaultValue={currentYear}>
                    <SelectTrigger className='w-36'>
                        <Calendar className='mr-2 text-gray-400' />
                        <SelectValue placeholder={currentYear} />
                    </SelectTrigger>
                    <SelectContent>
                        {years.map((year, index) => (
                            <SelectItem key={index} value={year.toString()}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <section className='mt-6'>
                <div className='overflow-x-auto'>
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
                                    {row.months.map((month, i) => (
                                        <TableCell key={i} className='px-4 py-2 text-center'>
                                            {month.available ? (
                                                <FileText
                                                    className='w-5 h-5 text-green-500 cursor-pointer hover:text-green-700'
                                                    onClick={() => window.open(month.document, '_blank')}
                                                />
                                            ) : (
                                                <FileText className='w-5 h-5 text-gray-400' />
                                            )}
                                        </TableCell>
                                    ))}
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
                </div>
            </section>
        </main>
    );
}
