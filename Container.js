import { Dependencies } from './Dependencies';
// export function add<T>(id: string, func: (injector: typeof get) => T): typeof add {
//     Dependencies.dependencies[id] = func;
//     return add;
// }
var Container = /** @class */ (function () {
    function Container() {
    }
    Container.add = function (id, func) {
        Dependencies.dependencies[id] = func;
        return Container;
    };
    return Container;
}());
export { Container };
export default Container;
