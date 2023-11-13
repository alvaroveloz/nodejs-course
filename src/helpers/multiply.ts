import colors  from 'colors/safe';
import fs from 'fs';

interface fileArgs {
  base: number;
  to?: number;
  list?: boolean;
}

export const createFile = ( { base = 5, list = false, to = 12 }: fileArgs  ): Promise<string> => {
  let output = `==================\nTable base: ${base} \n==================\n\n`;
  let showInConsole = `==================\nTable base: ${base} \n==================\n\n`;

  if (to > 20) {
    to = 12;
  }

  for (let i = 0; i <= to; i++) {
    let resultado = base * i;
    output += `${base} x ${i} = ${resultado}\n`;
    showInConsole += colors.bgCyan(colors.black(`${base} ${colors.blue('x')} ${i} ${colors.red('=')} ${resultado}\n`));
  }

  if (list) {
    console.log(showInConsole);
  }

  try {
    fs.writeFileSync(`./outputs/output-${base}.txt`, output)
    return Promise.resolve(`Table ${base} created!`);

  } catch (error) {
    return Promise.reject(`Error: ${error}`);
  }

}
