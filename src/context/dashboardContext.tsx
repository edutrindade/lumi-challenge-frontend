'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Client {
    id: string;
    name: string;
    number: string;
    cpfCnpj: string;
}

interface InvoiceDashboardResponse {
    month: string;
    year: string;
    totalEnergyConsumed: number;
    totalCompensated: number;
    totalInvoicesValue: number;
    totalWithoutGD: number;
    economyGD: number;
    installationNumbers: string[];
    clients: Client[];
    variationTotalEnergyConsumed: number;
    variationCompensated: number;
    variationTotalInvoicesValue: number;
}

interface DashboardContextType {
    dataDashboard: InvoiceDashboardResponse[];
    setDataDashboard: React.Dispatch<React.SetStateAction<InvoiceDashboardResponse[]>>;
    monthSelected: InvoiceDashboardResponse | undefined;
    setMonthSelected: React.Dispatch<React.SetStateAction<InvoiceDashboardResponse | undefined>>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
    const [dataDashboard, setDataDashboard] = useState<InvoiceDashboardResponse[]>([]);
    const [monthSelected, setMonthSelected] = useState<InvoiceDashboardResponse>();

    return <DashboardContext.Provider value={{ dataDashboard, setDataDashboard, monthSelected, setMonthSelected }}>{children}</DashboardContext.Provider>;
};

export const useDashboardContext = (): DashboardContextType => {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error('useDashboardContext deve ser usado dentro de um DashboardProvider');
    }
    return context;
};
