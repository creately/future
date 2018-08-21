/**
 * Future
 * Future extends Promise and exposes the resolve and reject methods.
 */
export class Future<T> extends Promise<T> {
  public resolve!: (val: T) => void;
  public reject!: (err: Error) => void;

  constructor() {
    super((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
