function myInstanceOf(left, right) { 
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;

    while (true) { 
        if (!proto) { 
            return false
        }

        if (proto === prototype) { 
            console.log('proto === prototype', proto === prototype);
            return true;
        }

        proto = Object.getPrototypeOf(proto);
    }
}

class A { }

class childA extends A { 

}

const a = new childA();

console.log(myInstanceOf(a, A));