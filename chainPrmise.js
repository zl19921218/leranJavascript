/*
 * @Author: 小石头
 * @Date: 2022-09-06 15:48:31
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-06 16:42:00
 * @Description: 
 */


const runner = new Promise((resolve, reject) => {
    let chain = Promise.resolve();

    chain = chain.then(() => console.log('resolve 1'));
    chain = chain.then(() => console.log('resolve 2'));
    chain = chain.then(() => console.log('resolve 3'));
    chain = chain.then(() => console.log('resolve 4'));
    chain = chain.then(() => console.log('resolve 5'));
    chain = chain.then(() => console.log('resolve 6'));

    chain = chain.then(() => {
        // console.log('');
        resolve();
    })
});

runner.then(() => {console.log('resolve 0')});