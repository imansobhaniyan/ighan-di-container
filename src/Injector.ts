import Container from "./Container";

export class Injector {
    public static get = (type: any): void => {
        return Container.dependencies[type.name](Injector);
    }
}

export default Injector;