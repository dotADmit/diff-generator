import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import diff from '../src/index.js';

const result = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const a = readFileSync(getFixturePath('file1.json'), 'utf8');
const b = readFileSync(getFixturePath('file2.json'), 'utf8');

test('common work', () => {
  expect(diff(a, b)).toEqual(result);
});