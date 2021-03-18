import { Injector } from './Injector';
export declare class Dependencies {
    static dependencies: {
        [id: string]: (injector: Injector) => any;
    };
}
