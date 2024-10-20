'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUpDown } from 'lucide-react';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Pie, PieChart, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useDashboardContext } from '@/context/dashboardContext';

interface IChartData {
    name: string;
    value: number;
}

export const ChartEconomyGD = () => {
    const { dataDashboard } = useDashboardContext();

    const rawData = dataDashboard.map((item) => ({
        name: item.month,
        value: Math.abs(item.economyGD)?.toFixed(2),
    }));

    const chartData: IChartData[] = rawData.map((item) => ({
        name: item.name,
        value: Number(item.value),
    }));

    const chartConfig: ChartConfig = {
        name: {
            label: 'Mês',
        },
        value: {
            label: 'Economia GD (R$)',
        },
    } satisfies ChartConfig;

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9bf3a7', '#e36161', '#2b194a', '#36b8e8', '#87aa36'];

    return (
        <Card className='w-full md:w-1/2 md:max-w-[600px] shadow-md border-transparent'>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className='text-lg sm:text-xl text-gray-800'>Economia GD por Mês</CardTitle>
                    <TrendingUpDown className='ml-auto w-8 h-8 text-green-500' />
                </div>

                <CardDescription>Economia mensal em R$</CardDescription>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                            <Legend
                                formatter={(value) => {
                                    if (value === 'value') return chartConfig.value.label;
                                    if (value === 'name') return chartConfig.name.label;
                                    return value;
                                }}
                            />
                            <Pie data={chartData} dataKey={'value'} nameKey='name' cx='50%' cy='50%' labelLine={true} outerRadius={80} fill='#8884d8' label>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};
