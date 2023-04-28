/*
 * @Author: 小石头
 * @Date: 2023-04-19 22:10:38
 * @LastEditors: 小石头
 * @LastEditTime: 2023-04-23 10:18:10
 * @Description: 节流
 */

function throttle(fn, wait = 200) {
    let lastTime = 0;

    return function() {
        const now = new Date().getTime();

        if (now - lastTime - wait <= 0) {
            return;
        }

        fn.apply(this, arguments);
        
        lastTime = now;
    }
}