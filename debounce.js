/*
 * @Author: 小石头
 * @Date: 2023-04-19 22:03:22
 * @LastEditors: 小石头
 * @LastEditTime: 2023-04-23 10:18:20
 * @Description: 防抖
 */

function debounce(fn, delay = 200) {
    let timer = null;

    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}