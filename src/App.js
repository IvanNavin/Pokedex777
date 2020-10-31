"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var monkey_png_1 = __importDefault(require("./img/monkey.png"));
var App_modules_scss_1 = __importDefault(require("./App.modules.scss"));
var App = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", { className: App_modules_scss_1.default.title },
            "Monkey in the dark",
            react_1.default.createElement("br", null),
            "You are awesome"),
        react_1.default.createElement("img", { className: App_modules_scss_1.default.img, src: monkey_png_1.default, alt: "monkey" })));
};
exports.default = App;
//# sourceMappingURL=App.js.map