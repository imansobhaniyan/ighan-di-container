import { get } from './src/Injector';
import { add } from './src/Container';

export * from "./src/Container"
export * from "./src/Injector"

export class DI {
    public static get = get;
    public static add = add;
}

export default DI;