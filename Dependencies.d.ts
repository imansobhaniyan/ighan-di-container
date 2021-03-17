import { get } from './Injector';
export declare class Dependencies {
    static dependencies: {
        [id: string]: (injector: typeof get) => any;
    };
}
