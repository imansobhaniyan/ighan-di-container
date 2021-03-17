import Injector from './Injector';

export class Container {
    static dependencies: { [id: string]: (injector: Injector) => any; } = {}

    public static add = <T>(id: string, func: (injector: Injector) => T): Injector => {
        Container.dependencies[id] = func;
        return Container;
    }
}

export default Container;