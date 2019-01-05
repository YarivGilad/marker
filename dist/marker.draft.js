"use strict";

const log = require('./index'); //by levels shorthand


console.log('\n\nby levels shorthand\n');
log.v('v', 'is short for verbose');
log.d('d', 'is short for debug');
log.i('i', 'is short for info');
log.w('w', 'is short for warn');
log.e('e', 'is short for err'); //by explicit levels  

console.log('\nby explicit levels\n');
log.verbose('verbose', 'is explicit');
log.debug('debug', 'is common');
log.info('info', 'is trivial');
log.warn('warn', 'is important');
log.err('err', 'is critical'); //by color names

console.log('\nby color names\n');
log.blue('blue', 'ocean');
log.magenta('magenta', 'is lighter then purple');
log.cyan('cyan', 'is lighter then blue');
log.green('green', 'peace');
log.yellow('yellow', 'mellow');
log.red('red', 'tape');
const complex_object = {
  one: 1,
  two: 2,
  internal: {
    a: 'first',
    b: 'second',
    nested: {
      key: 'value',
      some: 'thing',
      fruits: ['apple', 'orange', 'banana'],
      types: [{
        str: 'one',
        int: 2,
        bool: false,
        empty: null
      }]
    }
  },
  three: 3,
  four: 4
};
console.log('\n.obj()\n');
log.obj(complex_object, 'This is a complex_object');
/**
 * @throws let's throw some errors
 */

try {
  define('is not defind');
} catch (e) {
  console.log('\n.error()\n');
  log.error(e);
  console.log('\n\n');
}