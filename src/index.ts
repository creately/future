/**
 * Future extends Promise and exposes the resolve and reject methods.
 */
export type Future<T> = Promise<T> & {
  resolve: (val: T) => void;
  reject: (err: Error) => void;
};

/**
 * Creates a new Future instance by extending a new Promise instance.
 */
export function createFuture<T>(): Future<T> {
  let res: any;
  let rej: any;
  const future = new Promise((_res, _rej) => {
    res = _res;
    rej = _rej;
  });
  Object.defineProperties(future, {
    resolve: { value: res },
    reject: { value: rej },
  });
  return future as any;
}
