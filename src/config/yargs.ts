import yargs from 'yargs/yargs';
import colors from 'colors/safe';


export const argv = yargs(process.argv.slice(2)).options({
  b: {
    alias: colors.yellow('base'),
    demandOption: true, type: 'number',
    describe: colors.green('Generate a multiply table with this base')
  },
  l: {
    alias: colors.yellow('list'),
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: colors.green('List the mulitply table in the console')
  },
  t: {
    alias: colors.yellow('to'),
    demandOption: true,
    default: 12,
    type: 'number',
    describe: colors.green('Generate a multiply table up to this number')
  }
}).parseSync();
