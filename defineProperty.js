/*
 * @Author: 小石头
 * @Date: 2022-07-13 15:25:44
 * @LastEditors: 小石头
 * @LastEditTime: 2022-07-13 15:45:28
 * @Description: 测试 Object.defineProperty
 */

var a = {}

let initValue = 1;

Object.defineProperty(a, 'b', {
    // value: 0,
    // writable:true,
    enumerable:true,
    configurable:true,
    set: () => {
        console.log('修改');
        initValue += 1;
    },
    get: () => {
        console.log('读取');
        return initValue;
    }
})

a.b = 1;

console.log(a.b);
