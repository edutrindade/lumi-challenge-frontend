'use client';
import { useState } from 'react';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Calendar, User } from 'lucide-react';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { convertMonth } from '@/utils/generic';

export const FilterComponent = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>('all');
    const [clientNumber, setClientNumber] = useState<string>('');
    const [selectedClient, setSelectedClient] = useState<string>('all');
    const [filteredClients, setFilteredClients] = useState<any>([]);

    const data = [
        {
            month: 'JAN',
            year: 2024,
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
            year: 2024,
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
            year: 2024,
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
            year: 2024,
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
            year: 2024,
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
            year: 2024,
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
            year: 2024,
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
            year: 2024,
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
            year: 2024,
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

    const clients = data
        .map((item) => item.clients)
        .flat()
        .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id));

    const availableMonths = data.map((item) => convertMonth(item.month) + ` / ${item.year}`);
    const availableYears = new Set(data.map((item) => item.year));

    const handleClientSearch = (e: any) => {
        const value = e.target.value;
        setClientNumber(value);

        if (value) {
            const filtered = clients.filter((client) => client.number.includes(value));
            setFilteredClients(filtered);
        } else {
            setFilteredClients([]);
        }
    };

    console.log('filteredClients', filteredClients);

    return (
        <div className='flex flex-col gap-4 md:flex-row'>
            <div className='flex flex-col gap-4 md:flex-row'>
                <div className='flex items-center md:mr-4 flex-grow'>
                    <Select value={selectedFilter} onValueChange={setSelectedFilter}>
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

                <div className='flex items-center flex-grow'>
                    <div className='flex items-center md:mr-4'>
                        <Select value={selectedClient} onValueChange={setSelectedClient}>
                            <SelectTrigger className='border-transparent shadow-md rounded-md p-2 w-full justify-start focus:outline-none focus:ring-0 outline-none ring-0'>
                                <User className='mr-2 text-gray-400' />
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='all'>
                                    <p className='text-xs text-gray-600'>Todos</p>
                                </SelectItem>
                                {clients?.map((client) => (
                                    <SelectItem key={client.id} value={`${client.id}`}>
                                        <p className='text-xs text-gray-600'>
                                            {client.number} - {client.name}
                                        </p>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='relative flex-grow'>
                        <Input
                            type='text'
                            value={clientNumber}
                            onChange={(e) => {
                                setClientNumber(e.target.value);
                                handleClientSearch(e);
                            }}
                            placeholder='Nº do Cliente'
                            className='border-transparent shadou-md rounded-lg px-4 py-2 w-96 justify-start focus:outline-none focus:ring-0 outline-none ring-0'
                        />
                        {filteredClients.length > 0 && (
                            <ul className='absolute left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10'>
                                {filteredClients.map((client: any) => (
                                    <li key={client.id} className='px-4 py-2 hover:bg-gray-200 cursor-pointer' onClick={() => setSelectedClient(client.id)}>
                                        <p className='text-xs text-gray-600'>
                                            {client.number} - {client.name}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
