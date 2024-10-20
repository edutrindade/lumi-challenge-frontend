'use client';
import { useState } from 'react';
import { Select } from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { convertMonth } from '@/utils/generic';
import { useDashboardContext } from '@/context/dashboardContext';

export const FilterComponent = () => {
    const { dataDashboard, monthSelected, setMonthSelected } = useDashboardContext();
    const [selectedFilter, setSelectedFilter] = useState<string>(`${convertMonth(monthSelected?.month || 'JAN')} / 2024`);

    const clients = dataDashboard
        .map((item) => item.clients)
        .flat()
        .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id));

    const availableMonths = dataDashboard.map((item) => convertMonth(item.month) + ` / ${item.year || '2024'}`);

    const calculateTotals = () => {
        const totals = dataDashboard.reduce(
            (acc, item) => {
                acc.totalEnergyConsumed += item.totalEnergyConsumed;
                acc.totalCompensated += item.totalCompensated;
                acc.totalInvoicesValue += item.totalInvoicesValue;
                acc.clientsCount += item.clients.length;
                return acc;
            },
            {
                totalEnergyConsumed: 0,
                totalCompensated: 0,
                totalInvoicesValue: 0,
                clientsCount: 0,
            }
        );

        return totals;
    };

    const totals = calculateTotals();

    const handleSelectPeriodChange = (value: string) => {
        if (value === 'all') {
            setMonthSelected({
                ...monthSelected,
                month: 'all',
                year: '2024',
                totalCompensated: Number(totals.totalCompensated?.toFixed(2)),
                totalEnergyConsumed: Number(totals.totalEnergyConsumed?.toFixed(2)),
                totalInvoicesValue: Number(totals.totalInvoicesValue?.toFixed(2)),
                totalWithoutGD: 0,
                economyGD: 0,
                installationNumbers: monthSelected?.installationNumbers || [],
                clients: clients,
                variationTotalEnergyConsumed: 0,
                variationCompensated: 0,
                variationTotalInvoicesValue: 0,
            });
            setSelectedFilter('all');
            return;
        }

        const [month, year] = value.split(' / ');
        const monthAbbreviation = month?.slice(0, 3)?.toUpperCase();
        const filteredData = dataDashboard.filter((item) => item.month === monthAbbreviation && item.year === year);
        setMonthSelected(filteredData[0]);
        setSelectedFilter(value);
    };

    return (
        <div className='flex flex-col gap-4 md:flex-row '>
            <div className='flex flex-col gap-4 md:flex-row justify-between w-full'>
                <div className='flex items-center md:mr-4 flex-grow'>
                    <Select value={selectedFilter} onValueChange={handleSelectPeriodChange}>
                        <SelectTrigger className='border-transparent shadow-md rounded-md p-2 w-full md:w-48 focus:outline-none focus:ring-0 outline-none ring-0'>
                            <Calendar className='mr-2 text-gray-400' />
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='all'>
                                <p className='text-xs text-gray-600'>Últimos 12 meses</p>
                            </SelectItem>
                            {availableMonths?.map((month) => (
                                <SelectItem key={month} value={month} className='text-xs text-gray-600'>
                                    <p className='text-xs text-gray-600'>{month}</p>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};
