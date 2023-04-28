function promiseRace(arr) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            try {
                arr[i].then(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
            } catch (e) {
                reject(e);
            }
        }
    })
}