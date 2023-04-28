/*
 * @Author: 小石头
 * @Date: 2022-09-20 17:11:37
 * @LastEditors: 小石头
 * @LastEditTime: 2023-04-25 17:32:14
 * @Description:
 */

const PEDDING = 'pedding';
const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

class IPromise {

    status = PEDDING;

    value = null;

    reason = null;

    onFullfilledCallbacks = [];

    onRejectedCallbacks = [];

    回调队列
    callbacks = [];

    constructor(fn) {
        fn(this._resolve, this._reject);
    }

    _resolve = (value) => {
        if (this.status === PEDDING) {
            this.value = value;
            this.status = FULLFILLED;
            if (this.onFullfilledCallbacks.length) {
                this.onFullfilledCallbacks.forEach(fn => fn())
            }
        }
    }

    _reject = (reason) => {
        if (this.status === PEDDING) {
            this.reason = reason;
            this.status = REJECTED;

            if (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
    }

    then(onFulfilled, onRejected) {

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };

        const thenIPromise = new IPromise((resolve, reject) => {

            const resolveIPromis = (callback, value) => {
                try {
                    const data = callback(value);

                    if (thenIPromise === data) {
                        return reject(new Promise('type error'));
                    }

                    if (data instanceof IPromise) {
                        data.then(resolve, reject);
                    } else {
                        resolve(data)
                    }

                } catch (e) {
                    reject(e);
                }
            }

            if (this.status === FULLFILLED) {
                resolveIPromis(onFulfilled, this.value)
            }

            if (this.status === REJECTED) {
                resolveIPromis(onRejected, this.value)
            }

            if (this.status === PEDDING) {
                this.onFullfilledCallbacks.push(() => resolveIPromis(onFulfilled, this.value));
                this.onRejectedCallbacks.push(() => resolveIPromis(onRejected, this.reason));
            }


        })

        return thenIPromise;
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    finaly(callback) {

        return this.then(value => IPromise.resolve(callback()).then(() => value), reason => IPromise.resolve(callback()).then(() => reason))
    }

    static resolve(value) {
        return new IPromise((resolve, reject) => resolve(value))
    }

    static reject(reason) {
        return new IPromise((resolve, reject) => reject(reason))
    }
}

const promise = new IPromise((resolve, reject) => {
    resolve(1);
});

promise.then(res => {
    console.log('res: ', res)
}, err => {
    console.log('err: ', err)
})

IPromise.resolve(100).then(res => console.log('res: ', res));

IPromise.reject(1000).then(res => {}, err => {
    console.log('err: ', err)
})