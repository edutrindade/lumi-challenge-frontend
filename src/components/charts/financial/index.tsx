'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartArea } from 'lucide-react';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { formatCurrency } from '@/utils/generic';
import { useDashboardContext } from '@/context/dashboardContext';

export const ChartFinancial = () => {
    const { dataDashboard } = useDashboardContext();

    const chartData = dataDashboard.map((item) => ({
        month: item.month,
        totalValue: item.totalWithoutGD,
        gdrSavings: Math.abs(item.economyGD),
    }));

    const chartConfig = {
        totalValue: {
            label: 'Valor Total sem GD',
            color: '#F9971D',
        },
        gdrSavings: {
            label: 'Economia GD',
            color: '#3998db',
        },
    } satisfies ChartConfig;

    return (
        <Card className='w-full md:w-1/2 md:max-w-[600px] shadow-md border-transparent'>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className='text-lg sm:text-xl text-gray-800'>Resultados Financeiros (R$)</CardTitle>
                    <ChartArea className='ml-auto w-8 h-8 text-green-500' />
                </div>

                <CardDescription>Valor Total sem GD (R$) x Economia GD (R$)</CardDescription>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <AreaChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid vertical={false} strokeDasharray='3 3' />
                            <XAxis dataKey='month' tickLine={false} tickMargin={10} axisLine={true} tickFormatter={(value) => value.split('/')[0]} />
                            <YAxis tickLine={true} tickMargin={10} axisLine={true} />
                            <Tooltip
                                formatter={(value, name) => {
                                    if (name === 'totalValue') return [formatCurrency(value), chartConfig.totalValue.label];
                                    if (name === 'gdrSavings') return [formatCurrency(value), chartConfig.gdrSavings.label];
                                    return value;
                                }}
                            />
                            <Legend
                                formatter={(value) => {
                                    if (value === 'totalValue') return chartConfig.totalValue.label;
                                    if (value === 'gdrSavings') return chartConfig.gdrSavings.label;
                                    return value;
                                }}
                            />
                            <Area type='monotone' dataKey={'totalValue'} stroke={chartConfig.totalValue.color} fill={chartConfig.totalValue.color} />
                            <Area type='monotone' dataKey={'gdrSavings'} stroke={chartConfig.gdrSavings.color} fill={chartConfig.gdrSavings.color} />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};
