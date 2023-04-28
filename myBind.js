Function.prototype.myBind = function () { 
    if (typeof this !== 'function') { 
        return false;
    }

    const args = Array.prototype.shift.apply(arguments);

    const fn = this;

    return function Fn() { 
        fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments));
    }
}