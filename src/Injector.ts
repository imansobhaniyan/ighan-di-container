import { Dependencies } from './Dependencies';

export function get<T>(type: any): T {
    return Dependencies.dependencies[type.name](get);
}