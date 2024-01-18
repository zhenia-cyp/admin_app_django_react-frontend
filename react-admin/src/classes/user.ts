import {Role} from "./role";

export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: Role;
    permissions: string[];
    order_num: number | null;

    constructor(id = 0, first_name = '', last_name = '', email = '', role = new Role(), permissions: string[] = [], order_num = 0) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.role = role;
        this.permissions = permissions;
        this.order_num = order_num
        
    }

    get name() {
        return this.first_name + ' ' + this.last_name;
    }

    canView(page: string) {
        return this.permissions.some(p => p === `view_${page}`);
    }

    canEdit(page: string) {
        return this.permissions.some(p => p === `edit_${page}`);
    }
}