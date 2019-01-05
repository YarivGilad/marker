"use strict";

const log = require('./index');

const {
  Hidden
} = require('./constants');
/**
 * @describe [optional] - group of tests with a header to describe them
 */


describe('alias tests', () => {
  /**
   * @it - single tests using the 'it' syntax
   */
  it('v is verbose alias', () => {
    const out = log.v(Hidden, 'v is', 'verbose alias');
    const output = log.verbose(Hidden, 'v is', 'verbose alias');
    expect(out).toEqual(output);
  });
  it('d is debug alias', () => {
    const out = log.d(Hidden, 'd is', 'debug alias');
    const output = log.debug(Hidden, 'd is', 'debug alias');
    expect(out).toEqual(output);
  });
  it('i is info alias', () => {
    const out = log.i(Hidden, 'i is', 'info alias');
    const output = log.info(Hidden, 'i is', 'info alias');
    expect(out).toEqual(output);
  });
  /**
   * @test - single tests using the 'test' syntax
   */

  test('w is warn alias', () => {
    const out = log.w(Hidden, 'w is', 'warn alias');
    const output = log.warn(Hidden, 'w is', 'warn alias');
    expect(out).toEqual(output);
  });
  test('e is err alias', () => {
    const out = log.e(Hidden, 'e is', 'err alias');
    const output = log.err(Hidden, 'e is', 'err alias');
    expect(out).toEqual(output);
  });
});
describe('negative alias tests', () => {
  test("i isn't debug alias", () => {
    const out = log.i(Hidden, 'i is not', 'debug alias');
    const output = log.debug(Hidden, 'i is not', 'debug alias');
    expect(out).not.toEqual(output);
  });
  test("v isn't err alias", () => {
    const out = log.v(Hidden, 'v is not', 'err alias');
    const output = log.err(Hidden, 'v is not', 'err alias');
    expect(out).not.toEqual(output);
  });
  test("w isn't info alias", () => {
    const out = log.w(Hidden, 'w is not', 'info alias');
    const output = log.info(Hidden, 'w is not', 'info alias');
    expect(out).not.toEqual(output);
  });
});