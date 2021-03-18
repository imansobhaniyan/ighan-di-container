import { Injector } from './Injector';
export declare class Container {
    static add: <T>(id: string, func: (injector: Injector) => T) => Container;
}
export default Container;
