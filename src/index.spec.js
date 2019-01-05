const log = require('./index');

const { Hidden } = require('./constants');

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
    })
    it('d is debug alias', () => {
        const out = log.d(Hidden, 'd is', 'debug alias');
        const output = log.debug(Hidden, 'd is', 'debug alias');
        expect(out).toEqual(output);
    })
    it('i is info alias', () => {
        const out = log.i(Hidden, 'i is', 'info alias');
        const output = log.info(Hidden, 'i is', 'info alias');
        expect(out).toEqual(output);
    })
    /**
     * @test - single tests using the 'test' syntax
     */
    test('w is warn alias', () => {
        const out = log.w(Hidden, 'w is', 'warn alias');
        const output = log.warn(Hidden, 'w is', 'warn alias');
        expect(out).toEqual(output);
    })
    test('e is err alias', () => {
        const out = log.e(Hidden, 'e is', 'err alias');
        const output = log.err(Hidden, 'e is', 'err alias');
        expect(out).toEqual(output);
    })
})
describe('negative alias tests', () => {
    test("i isn't debug alias", () => {
        const out = log.i(Hidden,'i is not','debug alias');
        const output = log.debug(Hidden,'i is not','debug alias');
        expect(out).not.toEqual(output);
    })
    test("v isn't err alias", () => {
        const out = log.v(Hidden,'v is not','err alias');
        const output = log.err(Hidden,'v is not','err alias');
        expect(out).not.toEqual(output);
    })
    test("w isn't info alias", () => {
        const out = log.w(Hidden,'w is not','info alias');
        const output = log.info(Hidden,'w is not','info alias');
        expect(out).not.toEqual(output);
    })
})
describe('.obj() method tests', () => {
    test(".obj('some string') throws", () => {
        expect(()=> log.obj('i am no object')).toThrow();
    })
    test(".obj(222) throws", () => {
        expect(()=> log.obj(222)).toThrow();
    })
    test(".obj() without args throws", () => {
        expect(()=> log.obj()).toThrow();
    })
    test(".obj(null) throws", () => {
        expect(()=> log.obj(null)).toThrow();
    })
    test(".obj(true) throws", () => {
        expect(()=> log.obj(true)).toThrow();
    })
    test(".obj(undefined) throws", () => {
        expect(()=> log.obj(undefined)).toThrow();
    })
})
describe('.error() method tests', () => {
    test(".error('some string') throws", () => {
        expect(()=> log.error('i am not an Error')).toThrow();
    })
    test(".error(222) throws", () => {
        expect(()=> log.error(222)).toThrow();
    })
    test(".error() without args throws", () => {
        expect(()=> log.error()).toThrow();
    })
    test(".error(null) throws", () => {
        expect(()=> log.error(null)).toThrow();
    })
    test(".error(true) throws", () => {
        expect(()=> log.error(true)).toThrow();
    })
    test(".error(undefined) throws", () => {
        expect(()=> log.error(undefined)).toThrow();
    })
})