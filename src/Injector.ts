import { Container } from "./Container";

export function get(type: any): void {
    return Container.dependencies[type.name](get);
}