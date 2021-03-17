import { get } from './Injector';

export class Dependencies {
    public static dependencies: { [id: string]: (injector: typeof get) => any; } = {}
}