export interface Languages {
    id: number;
    name: string;
}

export interface Student {
    id: number;
    name: string;
    phone: string;
    age: string;
    languages: Array<string>;
}

interface Order{
    OrderType: string;
    Price: number;
    Volume: number;
}

export interface OrderBook {
    BuyOrders: Array<Order>;
    CreatedTimestampUtc: string;
    SellOrders: Array<Order>;
}

interface PriceLevel{
    bid: string;
    ask: string;
    last: string;
}
export interface LatestPrice{
    status: string;
    prices: {
        btc: PriceLevel;
        ltc: PriceLevel;
        doge: PriceLevel;
    }
}