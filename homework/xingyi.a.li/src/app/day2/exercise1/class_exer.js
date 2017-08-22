var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dog = (function () {
    function Dog(theName) {
        this.name = theName;
    }
    Dog.prototype.eat = function () {
        return '吃狗粮。';
    };
    Dog.prototype.introduce = function () {
        console.log('${this.name} ' + this.eat());
    };
    return Dog;
}());
var Cat = (function () {
    function Cat(theName) {
        this.name = theName;
    }
    Cat.prototype.eat = function () {
        return '吃猫粮。';
    };
    Cat.prototype.introduce = function () {
        console.log('${this.name} ' + this.eat());
    };
    return Cat;
}());
var People = (function () {
    function People(theName) {
        this.name = theName;
    }
    People.prototype.eat = function () {
        return '吃饭。';
    };
    People.prototype.use = function () {
        return '会使用工具';
    };
    People.prototype.introduce = function () {
        console.log('${this.name} ' + this.eat() + " " + this.use());
    };
    return People;
}());
var Man = (function (_super) {
    __extends(Man, _super);
    function Man(theName) {
        return _super.call(this, theName) || this;
    }
    Man.prototype.eat = function () {
        return _super.prototype.eat.call(this) + '并且吃很多。';
    };
    Man.prototype.use = function () {
        return _super.prototype.use.call(this) + '打猎。';
    };
    Man.prototype.introduce = function () {
        console.log('${this.name} ' + this.eat() + " " + this.use());
    };
    return Man;
}(People));
var Woman = (function (_super) {
    __extends(Woman, _super);
    function Woman(theName) {
        return _super.call(this, theName) || this;
    }
    Woman.prototype.eat = function () {
        return _super.prototype.eat.call(this) + '也爱吃零食。';
    };
    Woman.prototype.use = function () {
        return _super.prototype.use.call(this) + '煮饭。';
    };
    Woman.prototype.introduce = function () {
        console.log('${this.name} ' + this.eat() + " " + this.use());
    };
    return Woman;
}(People));
var dog;
dog = new Dog('狗狗');
dog.introduce();
var cat;
cat = new Cat('猫猫');
cat.introduce();
var people;
people = new People('人类');
people.introduce();
var man;
man = new Man('男人');
man.introduce();
var woman;
woman = new Woman('女人');
woman.introduce();
