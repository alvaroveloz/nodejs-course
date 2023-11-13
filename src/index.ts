import { argv } from './config/yargs';
import { createFile } from './helpers/multiply';
import colors from 'colors/safe';



console.clear();


const { b: base, t: to, l: list }= argv

createFile({ base, to,  list }).then((message: string): void => {
  console.log(colors.bgGreen(message));
})
