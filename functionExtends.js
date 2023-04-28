function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = () => {
    return this.name;
}

function Child(age) {
    this.age = age;
}

Child.prototype.getAge = () => {
    return this.age;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.construct = Child;

console.log(new Child('张三', '111').construct)