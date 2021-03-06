import { Component } from '@angular/core';
import {InputComponent} from "./bindings/input.component";
import {ConfirmComponent} from "./bindings/confirm.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <div class="container">
     <my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>
    </div>
    <div class="container">
     <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
    </div>
  `,
  styleUrls: ['app.component.css'],
  directives: [InputComponent, ConfirmComponent]
})
export class AppComponent {

  title = 'udemy project 2';
  
  myself = {
    name: '', age: ''
  };

  confirmedMyself = {
    name: '', age: ''
  };

  onSubmit(myself: {name: string, age:string}){
    this.myself = {name:myself.name, age: myself.age};

  }

  onConfirm(myself: {name: string, age:string}){
    this.confirmedMyself = {name:myself.name, age: myself.age};
  }
}
