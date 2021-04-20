#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var _a = process.argv, args = _a.slice(2);
var input_arg = '';
if (args.length > 0) {
    if (args[0] !== 'pt' && args[0] !== 'es' && args[0] !== 'en') {
        input_arg = 'en';
    }
    else {
        input_arg = args[0];
    }
}
else {
    input_arg = 'en';
}
var result = fs_1.default.readFileSync(path_1.resolve(__dirname, "./resources/" + input_arg), { encoding: 'utf8' });
var angelPercentageAmount = Math.round((Math.random() * 100 + Number.EPSILON) * 100) / 100;
var rascalPercentageAmount = (100 - angelPercentageAmount);
result = result.replace("${angelPercentageAmount}", angelPercentageAmount.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 0 }));
result = result.replace("${rascalPercentageAmount}", rascalPercentageAmount.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 0 }));
console.log(result.toString());
//# sourceMappingURL=safadao.js.map