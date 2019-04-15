import { createFuture } from '../';

describe('Future', () => {
  describe('resolve', () => {
    it('should resolve the promise', done => {
      const f = createFuture<number>();
      const n = 10;
      f.then(val => {
        expect(val).toBe(n);
        done();
      });
      f.resolve(n);
    });
  });

  describe('reject', () => {
    it('should reject the promise', done => {
      const f = createFuture<number>();
      const e = new Error('test error');
      f.catch(err => {
        expect(err).toBe(e);
        done();
      });
      f.reject(e);
    });
  });
});
