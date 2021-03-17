import { Dependencies } from './Dependencies';

export function get(type: any): void {
    return Dependencies.dependencies[type.name](get);
}