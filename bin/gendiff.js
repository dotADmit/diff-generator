#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import diff from '../src/index.js';

const program = new Command();

program
  .addHelpText('beforeAll', ' ')
  .version('1.0.0', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(diff(filepath1, filepath2));
  });

program.parse(process.argv);
