#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var fs_1 = __importDefault(require("fs"));
var commander_1 = require("commander");
var program = new commander_1.Command();
program.command('[language]')
    .description("Test commander")
    .action(handleAction);
var result = fs_1.default.readFileSync(__dirname + "/resources/en", { encoding: 'utf8' });
console.log(result.toString());
var angelPercentageAmount = 45.1;
var rascalPercentageAmount = 100 - angelPercentageAmount;
result = result.replace("${angelPercentageAmount}", angelPercentageAmount.toString());
result = result.replace("${rascalPercentageAmount}", rascalPercentageAmount.toString());
console.log(result.toString());
var world = 'world';
function hello(word) {
    if (word === void 0) { word = world; }
    return "Hello " + world + "! ";
}
exports.hello = hello;
console.log(hello());
function handleAction(language) {
    if (language === void 0) { language = "en"; }
    var targetLang = "";
    switch (language) {
        case "es":
            targetLang = "es";
            break;
        case "pt":
            targetLang = "pt";
            break;
        default:
            targetLang = "en";
    }
    console.log(targetLang);
}
//# sourceMappingURL=index.js.map