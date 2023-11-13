import colors  from 'colors/safe';
import fs from 'fs';

interface fileArgs {
  base: number;
  list?: boolean;
}

export const createFile = ( { base = 5, list = false }: fileArgs  ): Promise<string> => {
  let output = `==================\nTable base: ${base} \n==================\n\n`;

  for (let i = 0; i <= 10; i++) {
    let resultado = base * i;
    output += colors.bgCyan(colors.black(`${base} ${colors.blue('x')} ${i} ${colors.red('=')} ${resultado}\n`));
  }

  if (list) {
    console.log(output);
  }

  try {
    fs.writeFileSync(`./outputs/output-${base}.txt`, output)
    return Promise.resolve(`Table ${base} created!`);

  } catch (error) {
    return Promise.reject(`Error: ${error}`);
  }

}
