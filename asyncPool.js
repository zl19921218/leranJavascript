

function asyncPool(reqs, limit) {

    let index = 0;
    const len = reqs.length - 1;
    const results = [];

    const obj = {
        index: 0,
        results: [],
    }

    const handle = {
        set(obj, prop, value) {
            if (prop === 'index') {
                if (value < limit && reqs.length) {
                    exec(reqs.shift()).then((res) => {
                        obj.results[len - reqs.length - proxy.index] = res;
                        handle.index --;
                    })
                    handle.index ++;
                }
            }

            if (prop === 'results') {
                if (value.length === len + 1) {
                    return results;
                }
            }
        }
    }

    const proxy = new Proxy(obj, handle);

    exec(reqs.shift()).then((res) => {
        obj.results[len - reqs.length - proxy.index] = res;
        proxy.index --;
    })

    proxy.index ++;

}

async function exec(req) {
    const res = await req();
    return res;
}

const promiseArr = [];

for (let i = 0; i < 20; i++) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i);
        }, 200)
    })
    promiseArr.push(promise)
}

console.log('promiseArr: ', promiseArr);

console.log(asyncPool(promiseArr, 5))
