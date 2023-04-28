/*
 * @Author: 小石头
 * @Date: 2022-09-20 15:46:51
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-20 17:10:28
 * @Description: 
 */

class EventTrigger {
    constructor() {
        this.list = {}
    }

    on(eventName, fn) {
        if (!this.list.hasOwnProperty(eventName)) {
            this.list[eventName] = [fn];
        } else {
            this.list[eventName].push(fn);
        }
    }

    trigger(eventName, ...params) {
        
        const fns = this.list[eventName];

        if (!fns || !fns.length) {
            return;
        }

        fns.forEach(fn => {
            fn(...params);
        });
    }

    off(eventName, fn) {
        if (!this.list.hasOwnProperty(eventName)) {
            return;
        }

        const fns = this.list[eventName];

        if (!fn) {
            fns.length = 0;
            delete this.list[eventName];
        }

        for(let i = fns.length - 1; i >= 0; i --) {
            if (fn === fns[i]) {
                fns.splice(i, 1);
            }
        }

        if (!fns.length) {
            delete this.list[eventName];
        }
    }

    once(eventName, fn) {
        this.trigger(eventName, fn);
        this.off(eventName, fn);
    }
}

const eventTrigger = new EventTrigger();

const cb1 = (obj) => {
    console.log('我是 cb1 ', obj);
}

const cb2 = (obj) => {
    console.log('我是 cb2 ', obj);
}

eventTrigger.on('test', cb1);

eventTrigger.on('test', cb2);

eventTrigger.trigger('test', '我是谁');

eventTrigger.off('test', cb1);

eventTrigger.trigger('test', '我在这儿');
