import Injector from './Injector';

export module DI {
    export class Container {
        static dependencies: { [id: string]: (injector: Injector) => any; } = {}

        public static add<T>(id: string, func: (injector: Injector) => T): Injector {
            this.dependencies[id] = func;
            return this;
        }
    }
}

export default DI.Container;