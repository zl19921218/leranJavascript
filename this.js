var id = 'window id';

const obj = {
    id: 'obj id',
    a: function() { 
        console.log(this.id);
    },
    b: () => { 
        console.log(this.id);
    }
}

// obj.a();
// obj.b();
// new obj.a();
// new obj.b();

console.log('this: ', this);

const fun = () => console.log(this.id);

fun();
fun.call({ id: 'obj id' });
fun.apply({ id: 'obj id' });
fun.bind({ id: 'obj id' })();