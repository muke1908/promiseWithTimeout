type asyncFn<T> = Promise<T>;

class PromiseWithTimeOut<T> {
    private promise: Promise<T>;
    constructor(fn: Promise<T>, timeout = 100, timeoutMsg = 'Request timed out') {
        const timeoutPromise = new Promise<T>((_, reject) => {
            window.setTimeout(() => {
                reject(timeoutMsg);
            }, timeout);
        });

        this.promise = Promise.race([fn, timeoutPromise]);
    }

    public then(onFulfilled: ((value: T) => T) | null | undefined, onRejected: ((reason: string) => PromiseLike<never>) | null | undefined) {
        return this.promise.then(onFulfilled, onRejected);
    }

    public catch(onRejected: ((reason: unknown) => PromiseLike<never>) | null | undefined) {
        return this.promise.catch(onRejected);
    }

    public finally(onFinally: (() => void) | null | undefined) {
        return this.promise.finally(onFinally);
    }
}