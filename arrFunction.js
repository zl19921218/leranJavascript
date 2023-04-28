
const arr = [1,2,3];
const arr1 = [1,2, [3, 4], [5, [6, 7], [8]]];

Array.prototype.myMap = function(cb){

    const results = [];

    for(let i = 0; i < this.length; i ++) {
        results.push(cb(this[i]))
    }

    return results;
}

// console.log(arr.myMap(item => item + 1));


// cb(pre, current, index, array)
// reduce(cb, initialValue)
Array.prototype.myReduce = function(cb, initialValue) {
    let pre = initialValue;
    
    for(let i = 0; i < this.length; i ++) {
        pre = cb(pre, this[i], i, this);
    }

    return pre;
}

// console.log(arr.myReduce((pre, cur) => pre + cur, 5));


Array.prototype.mySome = function(cb) {
    for(let i = 0; i < this.length; i ++) {
        if (cb(this[i])) {
            return true;
        }
    }

    return false;
}

Array.prototype.myFlat = function() {
    const results = [];
    for(let i = 0; i < this.length; i ++) {
        if (Array.isArray(this[i])) {
            results.push(...this[i].myFlat())
        } else {
            results.push(this[i]);
        }
    }

    return results;
}

console.log(arr1.myFlat());