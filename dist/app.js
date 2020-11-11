"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = express_1.default();
    }
    listen() {
        this.app.listen(8084, () => console.log('Servidor corriendo en puerto 8084'));
    }
}
exports.App = App;
