// import { get } from './Injector';
import { Injector } from './Injector';
import { Dependencies } from './Dependencies';

// export function add<T>(id: string, func: (injector: typeof get) => T): typeof add {
//     Dependencies.dependencies[id] = func;
//     return add;
// }

export class Container {
    public static add = <T>(id: string, func: (injector: Injector) => T): Container => {
        Dependencies.dependencies[id] = func;
        return Container;
    }
}

export default Container;