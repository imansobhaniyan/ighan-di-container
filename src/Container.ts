import { get } from './Injector';
import { Dependencies } from './Dependencies';

export function add<T>(id: string, func: (injector: typeof get) => T): typeof add {
    Dependencies.dependencies[id] = func;
    return add;
}