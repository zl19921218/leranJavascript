
function promiseAll(arr) {

    const results = [];

    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            try {
                arr.then(res => {
                    results[i] = res;
                    if (results.length === arr.length) {
                        resolve(results);
                    }
                }, err => {
                    reject(err);
                })
            } catch (e) {
                reject(e);
            }
        }
    })
}