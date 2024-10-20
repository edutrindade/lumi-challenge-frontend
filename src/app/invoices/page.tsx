'use client';
import { useState } from 'react';
import { Header } from '@/components/header';
import { useSidebar } from '@/context/sidebarContext';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Calendar, FileText } from 'lucide-react';
import { Combobox } from '@/components/combobox';
import { fetchInvoicesLibrary } from '@/services/invoices';
import { useQuery } from '@tanstack/react-query';
import DataTable from '@/components/table';
import { DataTableSkeleton } from '@/components/table/skeleton';
import { ErrorComponent } from '@/components/error';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import DataTableMobile from '@/components/table/mobile';

const fetchLibraryData = async (): Promise<any[]> => {
    const response = await fetchInvoicesLibrary();
    return response;
};

export default function Invoices() {
    const { isMenuOpen } = useSidebar();
    const isMobile = useMediaQuery('(max-width: 768px)');

    const currentYear = new Date().getFullYear().toString();
    const years = Array.from({ length: 5 }, (_, i) => Number(currentYear) - i);

    const [selectedClient, setSelectedClient] = useState('');
    const [selectedYear, setSelectedYear] = useState<string>(currentYear);

    const { isPending, data, error } = useQuery({
        queryKey: ['library'],
        queryFn: fetchLibraryData,
    });

    if (isPending)
        return (
            <main className={`p-4 transition-all duration-300 ${isMenuOpen ? 'sm:ml-48 ml-0' : 'ml-0 sm:ml-16'}`}>
                <Header title='Faturas' />
                <section className='mt-6'>
                    <div className='overflow-x-auto'>
                        <DataTableSkeleton />
                    </div>
                </section>
            </main>
        );

    if (error) return <ErrorComponent />;

    const filteredData = data.filter((row) => {
        const yearFilteredMonths = row.months.filter((month: any) => month.year.toString() === selectedYear);
        return (selectedClient === 'all' || row.name.includes(selectedClient)) && yearFilteredMonths.some((month: any) => month.available);
    });

    return (
        <main className={`p-4 transition-all duration-300 ${isMenuOpen ? 'sm:ml-48 ml-0' : 'ml-0 sm:ml-16'}`}>
            <Header title='Faturas' />

            <div className='flex justify-between items-center mb-4'>
                <Combobox selectedItem={selectedClient} setSelectedItem={setSelectedClient} data={data} label='cliente' />

                <Select onValueChange={setSelectedYear} defaultValue={currentYear}>
                    <SelectTrigger className='w-36 border-transparent shadow-md rounded-md p-2 focus:outline-none focus:ring-0 outline-none ring-0'>
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
                <div className='overflow-x-auto'>{isMobile ? <DataTableMobile filteredData={filteredData} /> : <DataTable filteredData={filteredData} />}</div>
            </section>
        </main>
    );
}
