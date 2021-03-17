import { get } from './Injector';
export declare function add<T>(id: string, func: (injector: typeof get) => T): typeof add;
