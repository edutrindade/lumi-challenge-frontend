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

interface Invoice {
    month: string;
    year: string;
    available: boolean;
    document?: string;
}

export interface InvoiceLibraryResponse {
    id: string;
    name: string;
    clientNumber: string;
    installationNumber: string;
    distributor: string;
    months: Invoice[];
    clientId: string;
}

export type ApiLibraryResponse = InvoiceLibraryResponse[];
export type ApiDashboardResponse = InvoiceDashboardResponse;
