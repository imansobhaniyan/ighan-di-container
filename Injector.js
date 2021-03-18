import { Dependencies } from './Dependencies';
export function get(type) {
    return Dependencies.dependencies[type.name](get);
}
