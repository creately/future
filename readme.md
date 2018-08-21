# Future

Extended version of the Promise class which has `resolve` and `reject` methods to resolve or reject the underlying promise.

```ts
import { Future } from '@creately/future';

// Returns a promise which resolves after given time
function sleep( ms: number ): Promise<number> {
    const f = new Future<number>();
    setTimeout(() => f.resolve(Date.now()), ms);
    return f;
}
```
