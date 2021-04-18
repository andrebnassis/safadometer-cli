#!/usr/bin/env node
import fs from 'fs';
import { resolve } from 'path';

const [,, ...args] = process.argv
let input_arg = '';

if(args.length > 0){
    if (args[0] !== 'pt' &&  args[0] !== 'es' &&  args[0] !== 'en'){
        input_arg = 'en';
    }
    else{
        input_arg = args[0];
    }
}
else{
    input_arg = 'en';
}

let result = fs.readFileSync(resolve(__dirname,`./resources/${input_arg}`,), {encoding: 'utf8'});


const angelPercentageAmount = Math.round((Math.random()*100 + Number.EPSILON) * 100) / 100;
const rascalPercentageAmount = (100 - angelPercentageAmount);

result = result.replace("${angelPercentageAmount}", angelPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0}));
result = result.replace("${rascalPercentageAmount}", rascalPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0}));

console.log(result.toString());