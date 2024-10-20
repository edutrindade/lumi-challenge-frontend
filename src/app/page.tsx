'use client';
import { CardComponent } from '@/components/card';
import { ChartEconomyGD } from '@/components/charts/economyGD';
import { ChartEnergy } from '@/components/charts/energy';
import { ChartFinancial } from '@/components/charts/financial';
import { Header } from '@/components/header';
import { useSidebar } from '@/context/sidebarContext';
import { Cable, DollarSign, Plug, User2 } from 'lucide-react';

export default function Dashboard() {
    const { isMenuOpen } = useSidebar();

    return (
        <main className={`p-4 transition-all duration-300 ${isMenuOpen ? 'sm:ml-48 ml-0' : 'ml-0 sm:ml-16'}`}>
            <Header title='Dashboard' filter />
            <section className='grid grid-cols-1 gap-4 lg:grid-cols-4'>
                <CardComponent
                    title='Consumo de Energia Elétrica'
                    description='Energia Elétrica + Energia SCEEE s/ICMS'
                    value={608.3}
                    unit='KWh'
                    icon={<Plug width={56} height={56} />}
                />
                <CardComponent
                    title='Energia Compensada'
                    description='Energia Compensada GD I'
                    value={458.3}
                    unit='KWh'
                    icon={<Cable width={56} height={56} />}
                />
                <CardComponent
                    title='Faturamento Total'
                    description='Total das faturas emitidas período atual'
                    value='R$ 1.528,35'
                    icon={<DollarSign width={56} height={56} />}
                />
                <CardComponent title='Clientes' description='Total de Clientes' value={3} icon={<User2 width={56} height={56} />} />
            </section>

            <section className='mt-6 flex flex-col md:flex-row gap-4'>
                <ChartEnergy />
                <ChartFinancial />
                <ChartEconomyGD />
            </section>
        </main>
    );
}
