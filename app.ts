const fs = require('fs');

console.clear();

const base = 5
let output = '';

for (let i = 0; i <= 10; i++) {
  let resultado = 5 * i;
  output += `${base} x ${i} = ${resultado}\n`;
}

fs.writeFile(`./outputs/output-${base}.txt`, output, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})
