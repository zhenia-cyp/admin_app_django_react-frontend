import {OrderItem} from "./order_item";
export class Order {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    total: number;
    order_items: OrderItem[];
    order_num: number | null;

    constructor(id = 0, first_name = '', last_name = '', email = '', total = 0, order_items = [], order_num = 0) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.total = total;
        this.order_items = order_items;
        this.order_num = order_num
    }
}