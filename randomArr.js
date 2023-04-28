
function randomArr(arr) {
    let len = arr.length;
    const newArray = [];

    for(let i = 0; i < len; i ++) {
        const index = Math.floor(Math.random() * (len - i));

        newArray.push(arr[index]);

        arr.splice(index, 1);
    }

    return newArray;
}

console.log(randomArr([1,2,3,4,5,6,7,8,9]));