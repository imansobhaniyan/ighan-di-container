import { Container } from "./Container";

export class Injector{
    public static get(type: any) {
        return Container.dependencies[type.name](this);
    }
}