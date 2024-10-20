import { AxiosResponse } from 'axios';
import api from '@/services/api';
import { ApiDashboardResponse, ApiLibraryResponse } from '@/interfaces/invoice';

export const fetchInvoicesDashboard = async (): Promise<ApiDashboardResponse[]> => {
    try {
        const response: AxiosResponse<ApiDashboardResponse[]> = await api.get('/invoices/dashboard');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchInvoicesLibrary = async (): Promise<ApiLibraryResponse[]> => {
    try {
        const response: AxiosResponse<ApiLibraryResponse[]> = await api.get('/invoices/display');
        return response.data;
    } catch (error) {
        throw error;
    }
};
