
function addCurry() {
    let arr = [...arguments]
    // 利用闭包的特性收集所有参数值
    var fn = function() {
        arr.push(...arguments);
        return fn;
    };
    // 利用 toString 隐式转换
    fn.toString = function () {
        return arr.reduce(function (a, b) {
            return a + b;
        });
    }
    return fn;
}

console.log(addCurry(1)(2)(3));