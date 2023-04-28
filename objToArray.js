

function objToArray(obj) { 
    const arr = [];
    for (let key in obj) { 
        const temp = { key };
        for (let j in obj[key]) { 
            temp['op'] = j;
            temp['value'] = obj[key][j]
        }
        arr.push(temp);
    }

    return arr;
}

const obj = {
    key1: {
        op1: 'value1',
    },
    key2: {
        op2: 'value2',
    }
};

console.info(objToArray(obj));