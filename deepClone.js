
// 判断是否为引用值 （对象，数组）
const isObj = val => typeof obj === 'object' && val !== null;

function deepClone(obj) {

    // 判断是否为常量
    if (!isObj(obj)) {
        return obj;
    }

    // 初始化引用拷贝
    const newObj = Array.isArray(obj) ? [] : {};

    // 递归遍历
    for(const key in obj) {
        const item = obj[key];
        newObj[key] = isObj(key) ? deepClone(key) : item;
    }

    return newObj;
}

console.log(deepClone({a: 1, b: { c: [], d: { e: 2}}}))