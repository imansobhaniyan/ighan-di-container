"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var Dependencies_1 = require("./Dependencies");
function add(id, func) {
    Dependencies_1.Dependencies.dependencies[id] = func;
    return add;
}
exports.add = add;
