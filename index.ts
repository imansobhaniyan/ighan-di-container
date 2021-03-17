import { get } from './src/Injector';
import { add } from './src/Container';

export * from "./src/Container"
export * from "./src/Injector"

export class DI {
    get = get;
    add = add;
}

export default DI;