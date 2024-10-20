// Função para gerar cores aleatórias
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const formatCurrency = (value: any) => {
    if (value == null) return '';
    return 'R$ ' + Number(value)?.toFixed(2)?.replace('.', ',');
};

const convertMonth = (month: keyof typeof months) => {
    if (month == null) return '';

    const months: { [key: string]: string } = {
        JAN: 'Janeiro',
        FEV: 'Fevereiro',
        MAR: 'Março',
        ABR: 'Abril',
        MAI: 'Maio',
        JUN: 'Junho',
        JUL: 'Julho',
        AGO: 'Agosto',
        SET: 'Setembro',
        OUT: 'Outubro',
        NOV: 'Novembro',
        DEZ: 'Dezembro',
    };

    return months[month];
};

export { getRandomColor, formatCurrency, convertMonth };
