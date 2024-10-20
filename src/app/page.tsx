'use client';
import { useQuery } from '@tanstack/react-query';
import { CardComponent } from '@/components/card';
import { ChartEconomyGD } from '@/components/charts/economyGD';
import { ChartEnergy } from '@/components/charts/energy';
import { ChartFinancial } from '@/components/charts/financial';
import { Header } from '@/components/header';
import { useSidebar } from '@/context/sidebarContext';
import { Cable, ChartSpline, DollarSign, Plug, User2 } from 'lucide-react';
import { fetchInvoicesDashboard } from '@/services/invoices';
import { ApiDashboardResponse } from '@/interfaces/invoice';
import { useDashboardContext } from '@/context/dashboardContext';
import { CardSkeleton } from '@/components/card/skeleton';
import { CardWithChartSkeleton } from '@/components/charts/skeleton';
import { ErrorComponent } from '@/components/error';
import { convertMonth } from '@/utils/generic';

export default function Dashboard() {
    const { isMenuOpen } = useSidebar();
    const { setDataDashboard, monthSelected, setMonthSelected } = useDashboardContext();

    const fetchDashboardData = async (): Promise<ApiDashboardResponse> => {
        const response = await fetchInvoicesDashboard();
        setDataDashboard(response);
        setMonthSelected(response[response.length - 1]);
        return response[response.length - 1];
    };

    const { isPending, data, error } = useQuery({
        queryKey: ['dashboard'],
        queryFn: fetchDashboardData,
    });

    if (isPending) {
        return (
            <main className={`p-4 transition-all duration-300 ${isMenuOpen ? 'sm:ml-48 ml-0' : 'ml-0 sm:ml-16'}`}>
                <Header title='Dashboard' filter />
                <section className='grid grid-cols-1 gap-4 lg:grid-cols-4'>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </section>

                <section className='mt-6 flex flex-col md:flex-row gap-4'>
                    <CardWithChartSkeleton />
                    <CardWithChartSkeleton />
                    <CardWithChartSkeleton />
                </section>
            </main>
        );
    }

    if (error) return <ErrorComponent />;

    const { totalEnergyConsumed, totalCompensated, totalInvoicesValue, clients } = data;

    return (
        <main className={`p-4 transition-all duration-300 ${isMenuOpen ? 'sm:ml-48 ml-0' : 'ml-0 sm:ml-16'}`}>
            <Header title='Dashboard' filter />
            <span className='text-xs text-gray-600 absolute right-8 sm:flex hidden'>
                Dados referentes a {convertMonth(monthSelected!.month)} {monthSelected?.month !== 'all' ? 'de' : ''} {monthSelected?.year}
            </span>
            <section className='grid grid-cols-1 gap-4 lg:grid-cols-4 mt-12'>
                <CardComponent
                    title='Consumo de Energia Elétrica'
                    description='Energia Elétrica + Energia SCEEE s/ICMS'
                    value={monthSelected?.totalEnergyConsumed || totalEnergyConsumed}
                    unit='KWh'
                    icon={<Plug width={56} height={56} />}
                />
                <CardComponent
                    title='Energia Compensada'
                    description='Energia Compensada GD I'
                    value={monthSelected?.totalCompensated || totalCompensated}
                    unit='KWh'
                    icon={<Cable width={56} height={56} />}
                />
                <CardComponent
                    title='Faturamento Total'
                    description='Total das faturas emitidas período atual'
                    value={`R$ ${monthSelected?.totalInvoicesValue || totalInvoicesValue}`}
                    icon={<DollarSign width={56} height={56} />}
                />
                <CardComponent
                    title='Clientes'
                    description='Total de Clientes'
                    value={monthSelected?.clients?.length || clients.length}
                    icon={<User2 width={56} height={56} />}
                />
            </section>

            <div className='flex items-center p-2 mt-4'>
                <ChartSpline className='mr-2 text-green-700 w-4 h-4' />
                <span className='text-xs text-gray-800'>Últimos 12 meses</span>
            </div>

            <section className='mt-2 mb-6 flex flex-col md:flex-row gap-4 w-full justify-between'>
                <ChartEnergy />
                <ChartFinancial />
                <ChartEconomyGD />
            </section>
        </main>
    );
}
