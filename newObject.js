function newObj() { 
    const obj = {};

    const Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    const ret = Constructor.apply(obj, arguments);

    return typeof ret === 'function' ? ret : obj;
}

function A(name) { 
    this.name = name;
}

A.prototype.say = () => { 
    console.log('hello');
}

const a = new newObj(A, '张三');

console.log('a: ', a);