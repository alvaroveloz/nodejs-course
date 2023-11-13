import fs from 'fs';

export const createFile = (base: number = 5): Promise<string> => {
  let output = '';

  for (let i = 0; i <= 10; i++) {
    let resultado = base * i;
    output += `${base} x ${i} = ${resultado}\n`;
  }

  try {
    fs.writeFileSync(`./outputs/output-${base}.txt`, output)
    return Promise.resolve(`Table ${base} created!`);

  } catch (error) {
    return Promise.reject(`Error: ${error}`);
  }

}
