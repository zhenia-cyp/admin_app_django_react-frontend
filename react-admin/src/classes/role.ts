import {Permission} from "./permission";

export class Role {
    id: number;
    name: string;
    permissions: Permission[];
    order_num: number | null;

    constructor(id = 0, name = '', permissions = [], order_num = 0 ) {
        this.id = id;
        this.name = name;
        this.permissions = permissions;
        this.order_num = order_num;
    }
}