import { Dependencies } from './Dependencies';
// export function get<T>(type: any): T {
//     return Dependencies.dependencies[type.name](get);
// }
var Injector = /** @class */ (function () {
    function Injector() {
    }
    Injector.get = function (type) {
        return Dependencies.dependencies[type.name](Injector);
    };
    return Injector;
}());
export { Injector };
export default Injector;
