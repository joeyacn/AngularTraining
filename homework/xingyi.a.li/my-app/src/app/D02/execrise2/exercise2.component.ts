import { Component } from '@angular/core';

@Component({
    selector: 'app-day2-exerise1',
    templateUrl: '../day2.html'
})
export class Day2Exerise2Component {
    title = 'Day 2 exercise2';
    constructor(){
      let c: C;
      c = new C();
      c.method();
    } 
}


function f() {
  console.log("f(): evaluated");
  return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("f(): called");
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("g(): called");
  }
}

class C {
  @f()
  @g()
  method() {
    console.log('Day 2 exercise2');
  }
}