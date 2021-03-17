"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
var Dependencies_1 = require("./Dependencies");
function get(type) {
    return Dependencies_1.Dependencies.dependencies[type.name](get);
}
exports.get = get;
