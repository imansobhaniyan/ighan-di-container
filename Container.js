import { Dependencies } from './Dependencies';
export function add(id, func) {
    Dependencies.dependencies[id] = func;
    return add;
}
