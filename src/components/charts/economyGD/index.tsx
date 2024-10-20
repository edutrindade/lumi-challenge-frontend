'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUpDown } from 'lucide-react';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Pie, PieChart, Legend, ResponsiveContainer, Cell } from 'recharts';

interface IChartData {
    name: string;
    value: number;
}

export const ChartEconomyGD = () => {
    const data = [
        {
            month: 'JAN',
            totalEnergyConsumed: 608.3,
            totalCompensated: 458.3,
            totalInvoicesValue: 174,
            totalWithoutGD: 466.74199999999996,
            economyGD: -223.34,
            installationNumbers: ['7204076116', '7202210726'],
            clients: [
                {
                    id: '59c91b40-3906-44ff-89e9-5d110a4d546d',
                    name: 'JOSE MESALY FONSECA DE CARVALHO 52024156',
                    number: '3001116735',
                    cpfCnpj: '36.611.9**/****-**',
                },
                {
                    id: 'c78bba3a-c28f-43d5-b03e-0b002adff774',
                    name: 'SELFWAY TREINAMENTO PERSONALIZADO LTDA',
                    number: '3001422762',
                    cpfCnpj: '31.176.0**/****-**',
                },
            ],
            variationTotalEnergyConsumed: 0,
            variationCompensated: 0,
            variationTotalInvoicesValue: 0,
        },
        {
            month: 'FEV',
            totalEnergyConsumed: 401.94,
            totalCompensated: 251.94,
            totalInvoicesValue: 281.74,
            totalWithoutGD: 1348.99,
            economyGD: -1067.25,
            installationNumbers: ['7204076116', '7202210726'],
            clients: [
                {
                    id: '59c91b40-3906-44ff-89e9-5d110a4d546d',
                    name: 'JOSE MESALY FONSECA DE CARVALHO 52024156',
                    number: '3001116735',
                    cpfCnpj: '36.611.9**/****-**',
                },
                {
                    id: 'c78bba3a-c28f-43d5-b03e-0b002adff774',
                    name: 'SELFWAY TREINAMENTO PERSONALIZADO LTDA',
                    number: '3001422762',
                    cpfCnpj: '31.176.0**/****-**',
                },
            ],
            variationTotalEnergyConsumed: -33.92405063291139,
            variationCompensated: -45.027274710888065,
            variationTotalInvoicesValue: 61.91954022988506,
        },
        {
            month: 'MAR',
            totalEnergyConsumed: 656.5,
            totalCompensated: 506.5,
            totalInvoicesValue: 305.98,
            totalWithoutGD: 492.668,
            economyGD: -246.828,
            installationNumbers: ['7204076116', '7202210726'],
            clients: [
                {
                    id: '59c91b40-3906-44ff-89e9-5d110a4d546d',
                    name: 'JOSE MESALY FONSECA DE CARVALHO 52024156',
                    number: '3001116735',
                    cpfCnpj: '36.611.9**/****-**',
                },
                {
                    id: 'c78bba3a-c28f-43d5-b03e-0b002adff774',
                    name: 'SELFWAY TREINAMENTO PERSONALIZADO LTDA',
                    number: '3001422762',
                    cpfCnpj: '31.176.0**/****-**',
                },
            ],
            variationTotalEnergyConsumed: 63.332835746628845,
            variationCompensated: 101.03993014209733,
            variationTotalInvoicesValue: 8.603677149144605,
        },
        {
            month: 'ABR',
            totalEnergyConsumed: 628.34,
            totalCompensated: 478.34,
            totalInvoicesValue: 296.31,
            totalWithoutGD: 476.98199999999997,
            economyGD: -233.1,
            installationNumbers: ['7204076116', '7202210726'],
            clients: [
                {
                    id: '59c91b40-3906-44ff-89e9-5d110a4d546d',
                    name: 'JOSE MESALY FONSECA DE CARVALHO 52024156',
                    number: '3001116735',
                    cpfCnpj: '36.611.9**/****-**',
                },
                {
                    id: 'c78bba3a-c28f-43d5-b03e-0b002adff774',
                    name: 'SELFWAY TREINAMENTO PERSONALIZADO LTDA',
                    number: '3001422762',
                    cpfCnpj: '31.176.0**/****-**',
                },
            ],
            variationTotalEnergyConsumed: -4.289413556740285,
            variationCompensated: -5.559723593287271,
            variationTotalInvoicesValue: -3.160337276946211,
        },
        {
            month: 'MAI',
            totalEnergyConsumed: 601.22,
            totalCompensated: 451.22,
            totalInvoicesValue: 298.21,
            totalWithoutGD: 464.455,
            economyGD: -219.891,
            installationNumbers: ['7204076116', '7202210726'],
            clients: [
                {
                    id: '59c91b40-3906-44ff-89e9-5d110a4d546d',
                    name: 'JOSE MESALY FONSECA DE CARVALHO 52024156',
                    number: '3001116735',
                    cpfCnpj: '36.611.9**/****-**',
                },
                {
                    id: 'c78bba3a-c28f-43d5-b03e-0b002adff774',
                    name: 'SELFWAY TREINAMENTO PERSONALIZADO LTDA',
                    number: '3001422762',
                    cpfCnpj: '31.176.0**/****-**',
                },
            ],
            variationTotalEnergyConsumed: -4.316134576821467,
            variationCompensated: -5.669607392231456,
            variationTotalInvoicesValue: 0.6412203435591026,
        },
        {
            month: 'JUN',
            totalEnergyConsumed: 612.66,
            totalCompensated: 462.66,
            totalInvoicesValue: 297.48,
            totalWithoutGD: 1396.54,
            economyGD: -1099.06,
            installationNumbers: ['7204076116', '7202210726'],
            clients: [
                {
                    id: '59c91b40-3906-44ff-89e9-5d110a4d546d',
                    name: 'JOSE MESALY FONSECA DE CARVALHO 52024156',
                    number: '3001116735',
                    cpfCnpj: '36.611.9**/****-**',
                },
                {
                    id: 'c78bba3a-c28f-43d5-b03e-0b002adff774',
                    name: 'SELFWAY TREINAMENTO PERSONALIZADO LTDA',
                    number: '3001422762',
                    cpfCnpj: '31.176.0**/****-**',
                },
            ],
            variationTotalEnergyConsumed: 1.9027976447889192,
            variationCompensated: 2.535348610433934,
            variationTotalInvoicesValue: -0.24479393715836537,
        },
        {
            month: 'JUL',
            totalEnergyConsumed: 560.5,
            totalCompensated: 410.5,
            totalInvoicesValue: 304.12,
            totalWithoutGD: 1336.6799999999998,
            economyGD: -1032.56,
            installationNumbers: ['7204076116', '7202210726'],
            clients: [
                {
                    id: '59c91b40-3906-44ff-89e9-5d110a4d546d',
                    name: 'JOSE MESALY FONSECA DE CARVALHO 52024156',
                    number: '3001116735',
                    cpfCnpj: '36.611.9**/****-**',
                },
                {
                    id: 'c78bba3a-c28f-43d5-b03e-0b002adff774',
                    name: 'SELFWAY TREINAMENTO PERSONALIZADO LTDA',
                    number: '3001422762',
                    cpfCnpj: '31.176.0**/****-**',
                },
            ],
            variationTotalEnergyConsumed: -8.51369438187575,
            variationCompensated: -11.273937664807855,
            variationTotalInvoicesValue: 2.2320828290977497,
        },
        {
            month: 'AGO',
            totalEnergyConsumed: 568.02,
            totalCompensated: 82.02,
            totalInvoicesValue: 616.4000000000001,
            totalWithoutGD: 1210.52,
            economyGD: -591.04,
            installationNumbers: ['7204076116', '7202210726'],
            clients: [
                {
                    id: '59c91b40-3906-44ff-89e9-5d110a4d546d',
                    name: 'JOSE MESALY FONSECA DE CARVALHO 52024156',
                    number: '3001116735',
                    cpfCnpj: '36.611.9**/****-**',
                },
                {
                    id: 'c78bba3a-c28f-43d5-b03e-0b002adff774',
                    name: 'SELFWAY TREINAMENTO PERSONALIZADO LTDA',
                    number: '3001422762',
                    cpfCnpj: '31.176.0**/****-**',
                },
            ],
            variationTotalEnergyConsumed: 1.341659232827829,
            variationCompensated: -80.01948842874543,
            variationTotalInvoicesValue: 102.68315138761017,
        },
        {
            month: 'SET',
            totalEnergyConsumed: 847.86,
            totalCompensated: 428.86,
            totalInvoicesValue: 634.26,
            totalWithoutGD: 827.831,
            economyGD: -235.03400000000002,
            installationNumbers: ['7204076116', '7202210726', '7206096089'],
            clients: [
                {
                    id: '59c91b40-3906-44ff-89e9-5d110a4d546d',
                    name: 'JOSE MESALY FONSECA DE CARVALHO 52024156',
                    number: '3001116735',
                    cpfCnpj: '36.611.9**/****-**',
                },
                {
                    id: 'c78bba3a-c28f-43d5-b03e-0b002adff774',
                    name: 'SELFWAY TREINAMENTO PERSONALIZADO LTDA',
                    number: '3001422762',
                    cpfCnpj: '31.176.0**/****-**',
                },
                {
                    id: '28dd83db-b969-4bec-92cd-ae5fe91b41f6',
                    name: 'EDUARDO AUGUSTO COSTA TRINDADE',
                    number: '3010089099',
                    cpfCnpj: '097.6**.***-**',
                },
            ],
            variationTotalEnergyConsumed: 49.26587092003803,
            variationCompensated: 422.8724701292368,
            variationTotalInvoicesValue: 2.897469175859815,
        },
    ];

    const rawData = data.map((item) => ({
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
        <Card className='w-full md:w-1/2 md:max-w-[570px] shadow-md border-transparent'>
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
