# sort-object-entries


<a href="https://raw.githubusercontent.com/jaid/sort-object-entries/master/license.txt"><img src="https://img.shields.io/github/license/jaid/sort-object-entries?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor sort-object-entries"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/sort-object-entries/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fsort-object-entries%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/sort-object-entries/commits"><img src="https://img.shields.io/github/commits-since/jaid/sort-object-entries/v1.0.0?style=flat-square&logo=github" alt="Commits since v1.0.0"/></a> <a href="https://github.com/jaid/sort-object-entries/commits"><img src="https://img.shields.io/github/last-commit/jaid/sort-object-entries?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/sort-object-entries/issues"><img src="https://img.shields.io/github/issues/jaid/sort-object-entries?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/sort-object-entries"><img src="https://img.shields.io/npm/v/sort-object-entries?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/sort-object-entries/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/sort-object-entries?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/sort-object-entries"><img src="https://img.shields.io/npm/dm/sort-object-entries?style=flat-square&logo=npm" alt="Downloads"/></a>

**Sorts an object's entries. Order can be determined by both keys and properties.**


The compare function has 4 parameters and should return a number: `compare(value1, value2, key1, key2)`.


## Installation
<a href="https://npmjs.com/package/sort-object-entries"><img src="https://img.shields.io/badge/npm-sort--object--entries-C23039?style=flat-square&logo=npm" alt="sort-object-entries on npm"/></a>
```bash
npm install --save sort-object-entries@^1.0.0
```
<a href="https://yarnpkg.com/package/sort-object-entries"><img src="https://img.shields.io/badge/Yarn-sort--object--entries-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="sort-object-entries on Yarn"/></a>
```bash
yarn add sort-object-entries@^1.0.0
```



## Example

```javascript
const object = {
  mark: {
    age: 22,
  },
  tom: {
    age: 17,
  },
  sarah: {
    age: 13,
  },
  dwight: {
    age: 22,
  },
  bill: {
    age: 37,
  },
}

// Older people first, a-z on same age
function compare(value1, value2, key1, key2) {
  if (value1.age > value2.age) {
    return 1
  }
  if (value2.age > value1.age) {
    return -1
  }
  return new Intl.Collator("en").compare(key1, key2)
}

const result = sortObjectEntries(object, compare)

```

Variable `result` will now be:

```javascript
{
  bill: {
    age: 37,
  },
  dwight: {
    age: 22,
  },
  mark: {
    age: 22,
  },
  tom: {
    age: 17,
  },
  sarah: {
    age: 13,
  },
}
```













## Development



Setting up:
```bash
git clone git@github.com:jaid/sort-object-entries.git
cd sort-object-entries
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
