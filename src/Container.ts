import { get } from './Injector';

export class Container {
    public static dependencies: { [id: string]: (injector: typeof get) => any; } = {}
}

export function add<T>(id: string, func: (injector: typeof get) => T): typeof add {
    Container.dependencies[id] = func;
    return add;
}