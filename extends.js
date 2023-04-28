/*
 * @Author: 小石头
 * @Date: 2022-09-06 15:21:44
 * @LastEditors: 小石头
 * @LastEditTime: 2022-09-07 11:36:04
 * @Description: 
 */
class Parent {
    constructor(name, age = 18) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(`My child name is ${this.name}`);
    }

    hello() {
        console.log(`My child name is ${this.name}`);
    }

    getAge() {
        console.log(`age: ${this.age}`);
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getConstructorName() {
        console.log('constructorName: ', this.constructor.name);
        return this.constructor.name;
    }
}

class Child extends Parent {
    say() {
        console.log(`My name is ${this.name}`);
    }

    add() {
        super.setAge(this.getAge() + 1);
    }

    getThis() {
        console.log('this: ', this);
        return this;
    }
}

const child = new Child('臭宝儿');

child.say();
child.hello();

child.getAge();
child.add();
child.getAge();

child.getConstructorName();
child.getThis();