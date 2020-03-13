function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name
}

var objectFactory = function () {
    var obj = new Object()
    var Construtor = [].shift.call(arguments)
    obj.__proto__ = Construtor.prototype
    var ret = Construtor.apply(obj, arguments)
    return typeof ret === 'object' ? ret : obj
}

var a = objectFactory(Person, 'sven')