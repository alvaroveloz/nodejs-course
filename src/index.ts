import { argv } from './config/yargs';
import { createFile } from './helpers/multiply';
import colors from 'colors/safe';



console.clear();


const base = argv.b;
const list = argv.l;

createFile({ base, list }).then((message: string): void => {
  console.log(colors.bgGreen(message));
})
