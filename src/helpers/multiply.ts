import fs from 'fs';

interface fileArgs {
  base: number;
  list?: boolean;
}

export const createFile = ( { base = 5, list = false }: fileArgs  ): Promise<string> => {
  let output = `Table base: ${base} \n`;

  for (let i = 0; i <= 10; i++) {
    let resultado = base * i;
    output += `${base} x ${i} = ${resultado}\n`;
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
