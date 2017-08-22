import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-day2-exerise1',
    templateUrl: '../day2.html'
})
export class Day2Exerise1Component implements OnInit{
    title = 'Day 2 exercise1';
    constructor(){
        let dog: Animal;
        dog = new Dog('狗狗');
        dog.introduce();
        
        let cat: Animal;
        cat = new Cat('猫猫');
        cat.introduce();
        
        let people: Person;
        people = new People('人类');
        people.introduce();
        
        
        let man: Person;
        man = new Man('男人');
        man.introduce();
        
        let woman: Person;
        woman = new Woman('女人');
        woman.introduce();
    }
    ngOnInit(){
    }
}


interface Animal {
    name: string;
    eat(): string;
    introduce(): void;
}

interface Person extends Animal {
    use(): string;
}

class Dog implements Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    eat() {
        return `吃狗粮。`
    }

    introduce() {
        console.log(`${this.name} ` + this.eat() )
    }
}

class Cat implements Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    eat() {
        return `吃猫粮。`
    }

    introduce() {
        console.log(`${this.name} ` + this.eat() )
    }
}

class People implements Person {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    eat() {
        return `吃饭。`
    }

    use() {
        return `会使用工具`
    }

    introduce() {
        console.log(`${this.name} ` + this.eat() + " " + this.use() );
    }
}

class Man extends People {
    name: string;

    constructor(theName: string) {
        super(theName);
    }

    eat() {
        return super.eat() + `并且吃很多。`;
    }

    use() {
        return super.use() + `打猎。`;
    }

    introduce() {
        console.log(`${this.name} ` + this.eat() + " " + this.use() );
    }
}

class Woman extends People {
    name: string;

    constructor(theName: string) {
        super(theName);
    }

    eat() {
        return super.eat() + `也爱吃零食。`;
    }

    use() {
        return super.use() + `煮饭。`;
    }

    introduce() {
        console.log(`${this.name} ` + this.eat() + " " + this.use() );
    }
}
