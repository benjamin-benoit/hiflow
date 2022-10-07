export type Mission = {
    id: string;
    FromTo: { cityFrom: string, dateFrom: string, cityTo: string, dateTo: string};
    quotation: number;
    price: number;
    kilometers: number;
    client: string;
    types?: string[];
};