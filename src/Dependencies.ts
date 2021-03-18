import { Injector } from './Injector';

export class Dependencies {
    public static dependencies: { [id: string]: (injector: Injector) => any; } = {}
}