import { createFile } from './helpers/multiply';
import yargs from 'yargs/yargs';

console.clear();

const argv = yargs(process.argv.slice(2)).options({
  b: { alias: 'base', demandOption: true, type: 'number' },
  l: { alias: 'list', type: 'boolean' },
}).parseSync();


const base = argv.b;
const list = argv.l;

createFile({ base, list }).then((message: string): void => {
  console.log(message)
})
