/**
 * Future
 * Future extends Promise and exposes the resolve and reject methods.
 */
export interface Future<T> extends Promise<T> {
  resolve: (val: T) => void;
  reject: (err: Error) => void;
}

/**
 * create
 * create creates a new Future by creating and modifying a promise instance.
 */
export function create<T>(): Future<T> {
  let res: any;
  let rej: any;
  const promise = new Promise<T>(( _res, _rej ) => {
    res = _res;
    rej = _rej;
  });
  return Object.assign( promise, { resolve: res, reject: rej });
}
