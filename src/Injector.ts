import { Dependencies } from './Dependencies';

// export function get<T>(type: any): T {
//     return Dependencies.dependencies[type.name](get);
// }

export class Injector {
    public static get = <T>(type: any): T => {
        return Dependencies.dependencies[type.name](Injector);
    }
}

export default Injector;