declare module DI {
    export class Injector {
        public static get(type: any) {
            return Container.dependencies[type.name](this);
        }
    }
}