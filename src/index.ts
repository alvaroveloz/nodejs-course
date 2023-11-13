import { createFile } from './helpers/multiply';

console.clear();

const base = 3

createFile(base).then((message: string): void => {
  console.log(message)
})
