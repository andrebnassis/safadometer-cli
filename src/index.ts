#!/usr/bin/env node

import fs from 'fs';
import commander, { Command } from 'commander';

const  program = new Command();
program.command('[language]')
.description("Test commander")
.action(handleAction);

let result = fs.readFileSync(`${__dirname}/resources/en`, {encoding: 'utf8'});

console.log(result.toString());

const angelPercentageAmount = 45.1;
const rascalPercentageAmount = 100 - angelPercentageAmount;

result = result.replace("${angelPercentageAmount}", angelPercentageAmount.toString());
result = result.replace("${rascalPercentageAmount}", rascalPercentageAmount.toString());

console.log(result.toString());

const world = 'world';

export function hello(word: string = world): string {
  return `Hello ${world}! `;
}

console.log(hello());

function handleAction(language: string|undefined = "en") {
    let targetLang = "";
    switch(language){
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

export default program;