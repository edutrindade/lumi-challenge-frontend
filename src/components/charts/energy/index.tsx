'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const ChartEnergy = () => {
    const chartData = [
        {
            month: 'JAN',
            energyConsumption: 526,
            compensatedEnergy: 120,
        },
        {
            month: 'FEV',
            energyConsumption: 780,
            compensatedEnergy: 290,
        },
        {
            month: 'MAR',
            energyConsumption: 450,
            compensatedEnergy: 130,
        },
        {
            month: 'ABR',
            energyConsumption: 600,
            compensatedEnergy: 250,
        },
        {
            month: 'MAI',
            energyConsumption: 350,
            compensatedEnergy: 100,
        },
        {
            month: 'JUN',
            energyConsumption: 300,
            compensatedEnergy: 125,
        },
        {
            month: 'JUL',
            energyConsumption: 250,
            compensatedEnergy: 100,
        },
        {
            month: 'AGO',
            energyConsumption: 200,
            compensatedEnergy: 75,
        },
        {
            month: 'SET',
            energyConsumption: 350,
            compensatedEnergy: 110,
        },
    ];

    const chartConfig = {
        energyConsumption: {
            label: 'Consumo de Energia Elétrica',
            color: '#6DC19B',
        },
        compensatedEnergy: {
            label: 'Energía Compensada',
            color: '#F6AD55',
        },
    } satisfies ChartConfig;

    return (
        <Card className='w-full md:w-1/2 md:max-w-[570px] shadow-md border-transparent'>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className='text-lg sm:text-xl text-gray-800'>Balanço Energético (kWh)</CardTitle>
                    <Zap className='ml-auto w-8 h-8 text-green-500' />
                </div>

                <CardDescription>Consumo de Energia Elétrica (kWh) x Energía Compensada (kWh)</CardDescription>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid vertical={false} strokeDasharray='3 3' />
                            <XAxis dataKey='month' tickLine={false} tickMargin={10} axisLine={true} tickFormatter={(value) => value.split('/')[0]} />
                            <YAxis tickLine={true} tickMargin={10} axisLine={true} />
                            <Tooltip
                                formatter={(value, name) => {
                                    if (name === 'energyConsumption') return [value + ' kWh', chartConfig.energyConsumption.label];
                                    if (name === 'compensatedEnergy') return [value + ' kWh', chartConfig.compensatedEnergy.label];
                                    return value;
                                }}
                            />
                            <Legend
                                formatter={(value) => {
                                    if (value === 'energyConsumption') return chartConfig.energyConsumption.label;
                                    if (value === 'compensatedEnergy') return chartConfig.compensatedEnergy.label;
                                    return value;
                                }}
                            />
                            <Bar dataKey={'energyConsumption'} fill={chartConfig.energyConsumption.color} radius={4} />
                            <Bar dataKey={'compensatedEnergy'} fill={chartConfig.compensatedEnergy.color} radius={4} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};
